---
pcr_id: pcr.constructions-and-construction-services.construction-services.bonded-interior-ceramic-floor-tiling-services
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 室内陶瓷地砖薄层粘贴服务

## 1. 范围与适用性

本类别计量在已验收、稳定、干燥、清洁且平整度适用的室内既有基层上完成的安装服务。施工覆盖排版、陶瓷地砖裁切、水拌水泥基薄层粘结料、粘贴凝结、水泥基填缝、指定运动缝处理和最终清洁。排除墙面、石材、环氧、厚层砂浆、室外和浸水体系。基层制造、重大找平或修复、防水膜、拆除及后续建筑使用属于独立责任。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.bonded-interior-ceramic-floor-tiling-services |
| classification_refs | cpc:3.0:54740; narrower |
| covered_products | 就绪基层上的室内陶瓷地砖薄层粘贴施工 |
| excluded_products | 墙面/石材/环氧铺贴；基层施工；膜层；拆除 |
| representative_product | 清洁且验收合格的室内陶瓷地砖地面 |
| production_route | 裁切 → 拌粘结浆 → 粘贴凝结 → 拌填缝浆 → 填缝、接缝处理及清洁 |
| market_state | 使用前的承包施工验收服务 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 验收合格的室内陶瓷地砖铺贴 |
| How much | 1 m2 |
| How well | 按声明的安装设计、粘结/填缝质量和验收检查；不虚构通用性能值 |
| How long or cycle | 一个施工批段至完成固化及验收；不声明使用寿命 |
| reference_flow_link | `accepted_tiled_floor` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 验收合格的室内陶瓷地砖薄层粘贴服务 |
| 参考流属性 | 面积 `93a60a56-a3c8-19da-a746-0800200c9a66` |
| 参考单位组 | 面积单位组 `93a60a57-a3c8-18da-a746-0800200c9a66` |
| 参考单位 | m2 |
| 必需限定信息 | 室内位置；基层就绪记录；瓷砖坯体/表面/尺寸/厚度；粘结料与填缝料产品/等级；实际粘结层厚度；缝宽/深；运动缝设计及实际密封胶化学组成；验收标准；施工日期及净面积方法 |

必需限定信息应在前景数据包中声明。参考流计量完工面积，并不代表瓷砖材料质量。

## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| net_area | accepted_tiled_floor | 面积 `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | A = 施工批段验收净铺贴地面面积；采用 cp_grout_finish 按平面几何计量并扣除洞口、未完工和不合格面积。 |
| wet_dry_basis | mortar_feed; grout_feed | 质量 | kg | 干粉、拌和水、湿浆、湿废物和固体分开；湿浆质量不是干胶结料质量。 |
| tile_conversion | whole_tiles | 质量 | kg | 按数量记录的砖仅用同产品实测单件质量换算；无实际面密度及厚度时不得由 m2 推算 kg。 |
| energy_unit | cut_electricity; mortar_electricity; bond_electricity; grout_electricity; finish_electricity | 能量 | MJ | 保留仪表单位；electricity_MJ = electricity_kWh * 3.6；保存原始读数。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已验收就绪的室内既有基层；无待做的重大修正或膜层施工 |
| starting_condition_role | 安装服务前景之外的供应前提 |
| product_classification_scope | cpc:3.0:54740 中较窄的室内陶瓷地砖子集 |
| recursive_input_rule | 不得由中间地面面积交接递归引入另一套完整铺贴服务。外部同类别分包需单独记录不重叠的位置及边界。 |
| upstream_dataset_requirement | 将采购砖、配制粘结料/填缝料、水、电力及实际耗材连接至兼容上游数据集；披露排除的基层/膜层负担。 |
| disclosure | 声明就绪基层供应交接点、排除施工、内部转移、接缝设计、共享资源归属及废物接管点。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| ready_substrate | foreground_boundary | 须有签认的就绪检查；需要重大修复、找平或膜层时，停止本范围并分配独立数据集。 | laticrete-thinsets |
| service_gate | all_processes | 指定接缝处理及清洁后的验收净地面面积为终点。实测水、干粉、湿浆和裁切砖转移；不假定水化产率或反应排放。 | mapei-floor-installation |
| burden_ownership | shared_service | 共享资产服务仅由 grout_finish 持有一次，并记录全部使用节点与日期；运行能源在使用节点计量，并从共享服务中移除。 |  |
| waste_gate | all_processes | 捕集浆、粉尘和残余作为受管理废物移交。实际基本流排放须有物种、适用粒径、受纳介质和数量；空白观察不等于零。 |  |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |

### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：实测待粘贴裁切砖及整砖 (`prepared_tiles`)

过程／待建立交换的方向／类型：`layout_cut` / `outputs` / `product`.

按转移标识及实测质量移交 bond_cure；其不是最终参考输出。

- 采集对象：实测待粘贴裁切砖及整砖
- 流属性/单位: Mass / kg
- 数量规则: q_lot / A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_layout_cut`
- 尚待核实的可选筛查提示：暂定宽泛筛选估算；须以经审查记录替换
  - 范围角色: `qa_guardrail`
  - 下限: 5
  - 上限: 100
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
材料筛选较宽，因为产品厚度、配方、几何、临时辅助件及返工可变；实际产品/批次计量决定数值。

#### 采集要求：向项目外转出的未用陶瓷砖 (`tile_return`)

过程／待建立交换的方向／类型：`layout_cut` / `outputs` / `product`.

仅包括可用砖的对外退回；期末库存单列，不得再次计为退回。

- 采集对象：向项目外转出的未用陶瓷砖
- 流属性/单位: Mass / kg
- 数量规则: q_lot / A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_layout_cut`
- 尚待核实的可选筛查提示：暂定宽泛筛选估算；须以经审查记录替换
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 100
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
材料筛选较宽，因为产品厚度、配方、几何、临时辅助件及返工可变；实际产品/批次计量决定数值。

#### 采集要求：按实际材料分开的瓷砖包装废物 (`tile_packaging`)

过程／待建立交换的方向／类型：`layout_cut` / `outputs` / `waste`.

依据记录逐项确定纸板、塑料或托盘交换；不使用泛包装 UUID。

- 采集对象：按实际材料分开的瓷砖包装废物
- 流属性/单位: Mass / kg
- 数量规则: q_lot / A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_layout_cut`
- 尚待核实的可选筛查提示：暂定宽泛筛选估算；须以经审查记录替换
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 10
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
宽废物筛选考虑干湿状态、含水、裁切排版、批次残余及返工；不是预期废弃率。

#### 采集要求：按物种及粒径实测的裁切空气排放 (`cut_air_release`)

过程／待建立交换的方向／类型：`layout_cut` / `outputs` / `elementary`.

仅纳入实际发生的排放；记录物种、粒径、空气介质和控制系统。捕集粉尘归入废物。

- 采集对象：按物种及粒径实测的裁切空气排放
- 流属性/单位: Mass / kg
- 数量规则: q_lot / A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_layout_cut`
- 尚待核实的可选筛查提示：暂定宽泛筛选估算；须以经审查记录替换
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 5
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
宽排放筛选仅在物种及介质已知后提示数量级或单位错误；没有排放因子或假定发生。

#### 采集要求：按实际配方确定的供应商要求液体添加剂 (`mortar_additives`)

过程／待建立交换的方向／类型：`mortar_mix` / `inputs` / `product`.

条件性为零、一项或多项产品；采集化学组成及配制产品总质量，不假定有效成分比例。

- 采集对象：按实际配方确定的供应商要求液体添加剂
- 流属性/单位: Mass / kg
- 数量规则: q_lot / A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_mortar_mix`
- 尚待核实的可选筛查提示：暂定宽泛筛选估算；须以经审查记录替换
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 10
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
材料筛选较宽，因为产品厚度、配方、几何、临时辅助件及返工可变；实际产品/批次计量决定数值。

#### 采集要求：按材料区分的干混料与添加剂包装 (`mortar_packaging`)

过程／待建立交换的方向／类型：`mortar_mix` / `outputs` / `waste`.

区分实际袋、容器和托盘材料，以及保留或再用包装。

- 采集对象：按材料区分的干混料与添加剂包装
- 流属性/单位: Mass / kg
- 数量规则: q_lot / A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_mortar_mix`
- 尚待核实的可选筛查提示：暂定宽泛筛选估算；须以经审查记录替换
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 10
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
宽废物筛选考虑干湿状态、含水、裁切排版、批次残余及返工；不是预期废弃率。

#### 采集要求：按物种及介质实测的粘结浆拌和排放 (`mortar_mix_release`)

过程／待建立交换的方向／类型：`mortar_mix` / `outputs` / `elementary`.

仅包括实际发生的排放；计量并声明物种、适用粒径、受纳介质及事件。捕集材料仍属废物；不假定水化气体或蒸发产率。

- 采集对象：按物种及介质实测的粘结浆拌和排放
- 流属性/单位: Mass / kg
- 数量规则: q_lot / A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_mortar_mix`
- 尚待核实的可选筛查提示：暂定宽泛筛选估算；须以经审查记录替换
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 5
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
宽排放筛选仅在物种及介质已知后提示数量级或单位错误；没有排放因子或假定发生。

#### 采集要求：按实际材料区分的粘贴耗材与临时辅助件 (`bond_consumables`)

过程／待建立交换的方向／类型：`bond_cure` / `inputs` / `product`.

记录间隔件、调平辅助件及保护耗材；区分可复用资产与消耗材料。

- 采集对象：按实际材料区分的粘贴耗材与临时辅助件
- 流属性/单位: Mass / kg
- 数量规则: q_lot / A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_bond_cure`
- 尚待核实的可选筛查提示：暂定宽泛筛选估算；须以经审查记录替换
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 10
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
材料筛选较宽，因为产品厚度、配方、几何、临时辅助件及返工可变；实际产品/批次计量决定数值。

#### 采集要求：实测已粘结凝结且待填缝地面 (`ungrouted_floor`)

过程／待建立交换的方向／类型：`bond_cure` / `outputs` / `product`.

依据实际产品说明确认粘结料凝结后移交填缝的面积；内部面积须实测。

- 采集对象：实测已粘结凝结且待填缝地面
- 流属性/单位: Area / m2
- 数量规则: q_lot / A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_bond_cure`
- 尚待核实的可选筛查提示：暂定宽泛筛选估算；须以经审查记录替换
  - 范围角色: `qa_guardrail`
  - 下限: 0.5
  - 上限: 3
  - 单位: m2
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
内部面积筛选考虑相对验收面积的实测在制及返工；其不固定转移数量。

#### 采集要求：按组成区分的粘贴残余及拆除的不合格施工物 (`bond_reject`)

过程／待建立交换的方向／类型：`bond_cure` / `outputs` / `waste`.

将每项缺陷关联至产生批次及返工路径；含瓷砖和粘结料的废弃物不得计入验收面积。

- 采集对象：按组成区分的粘贴残余及拆除的不合格施工物
- 流属性/单位: Mass / kg
- 数量规则: q_lot / A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_bond_cure`
- 尚待核实的可选筛查提示：暂定宽泛筛选估算；须以经审查记录替换
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 100
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
宽废物筛选考虑干湿状态、含水、裁切排版、批次残余及返工；不是预期废弃率。

#### 采集要求：按物种及介质实测的粘贴凝结排放 (`bond_release`)

过程／待建立交换的方向／类型：`bond_cure` / `outputs` / `elementary`.

仅包括实际发生的排放；计量并声明物种、适用粒径、受纳介质及事件。捕集材料仍属废物；不假定水化气体或蒸发产率。

- 采集对象：按物种及介质实测的粘贴凝结排放
- 流属性/单位: Mass / kg
- 数量规则: q_lot / A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_bond_cure`
- 尚待核实的可选筛查提示：暂定宽泛筛选估算；须以经审查记录替换
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 5
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
宽排放筛选仅在物种及介质已知后提示数量级或单位错误；没有排放因子或假定发生。

#### 采集要求：按实际配方确定的供应商要求液体添加剂 (`grout_additives`)

过程／待建立交换的方向／类型：`grout_mix` / `inputs` / `product`.

条件性为零、一项或多项产品；采集化学组成及配制产品总质量，不假定有效成分比例。

- 采集对象：按实际配方确定的供应商要求液体添加剂
- 流属性/单位: Mass / kg
- 数量规则: q_lot / A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_grout_mix`
- 尚待核实的可选筛查提示：暂定宽泛筛选估算；须以经审查记录替换
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 10
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
材料筛选较宽，因为产品厚度、配方、几何、临时辅助件及返工可变；实际产品/批次计量决定数值。

#### 采集要求：按材料区分的干混料与添加剂包装 (`grout_packaging`)

过程／待建立交换的方向／类型：`grout_mix` / `outputs` / `waste`.

区分实际袋、容器和托盘材料，以及保留或再用包装。

- 采集对象：按材料区分的干混料与添加剂包装
- 流属性/单位: Mass / kg
- 数量规则: q_lot / A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_grout_mix`
- 尚待核实的可选筛查提示：暂定宽泛筛选估算；须以经审查记录替换
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 10
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
宽废物筛选考虑干湿状态、含水、裁切排版、批次残余及返工；不是预期废弃率。

#### 采集要求：按物种及介质实测的填缝浆拌和排放 (`grout_mix_release`)

过程／待建立交换的方向／类型：`grout_mix` / `outputs` / `elementary`.

仅包括实际发生的排放；计量并声明物种、适用粒径、受纳介质及事件。捕集材料仍属废物；不假定水化气体或蒸发产率。

- 采集对象：按物种及介质实测的填缝浆拌和排放
- 流属性/单位: Mass / kg
- 数量规则: q_lot / A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_grout_mix`
- 尚待核实的可选筛查提示：暂定宽泛筛选估算；须以经审查记录替换
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 5
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
宽排放筛选仅在物种及介质已知后提示数量级或单位错误；没有排放因子或假定发生。

#### 采集要求：按实际化学组成区分的运动缝密封胶及附件 (`movement_joint_materials`)

过程／待建立交换的方向／类型：`grout_finish` / `inputs` / `product`.

实际接缝设计要求时纳入；记录密封胶化学组成、背衬、长度、截面和固化要求。

- 采集对象：按实际化学组成区分的运动缝密封胶及附件
- 流属性/单位: Mass / kg
- 数量规则: q_lot / A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_grout_finish`
- 尚待核实的可选筛查提示：暂定宽泛筛选估算；须以经审查记录替换
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 10
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
材料筛选较宽，因为产品厚度、配方、几何、临时辅助件及返工可变；实际产品/批次计量决定数值。

#### 采集要求：按实际材料区分的精整及保护耗材 (`finish_consumables`)

过程／待建立交换的方向／类型：`grout_finish` / `inputs` / `product`.

清洁产品仅在使用时记录，并保留配方与安全信息；可复用设备单列。

- 采集对象：按实际材料区分的精整及保护耗材
- 流属性/单位: Mass / kg
- 数量规则: q_lot / A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_grout_finish`
- 尚待核实的可选筛查提示：暂定宽泛筛选估算；须以经审查记录替换
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 10
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
材料筛选较宽，因为产品厚度、配方、几何、临时辅助件及返工可变；实际产品/批次计量决定数值。

#### 采集要求：已分配的共享通道与设备服务 (`shared_service`)

过程／待建立交换的方向／类型：`grout_finish` / `inputs` / `product`.

条件性覆盖五个节点的共享资产服务；仅在此录入一次并保留使用者及事件账，排除已计量能源。

- 采集对象：已分配的共享通道与设备服务
- 流属性/单位: Time / h
- 数量规则: q_lot / A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_grout_finish`
- 尚待核实的可选筛查提示：暂定宽泛筛选估算；须以经审查记录替换
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 100
  - 单位: h
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
服务小时随项目大小、共享资产及占用变化；宽筛选不确立资产寿命或默认分配。

#### 采集要求：按材料区分的填缝料、密封胶及拆除不合格精整废物 (`finish_residue`)

过程／待建立交换的方向／类型：`grout_finish` / `outputs` / `waste`.

区分固化残余、未用浆和拆除的组合物；关联内部返工，不给予材料避免信用。

- 采集对象：按材料区分的填缝料、密封胶及拆除不合格精整废物
- 流属性/单位: Mass / kg
- 数量规则: q_lot / A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_grout_finish`
- 尚待核实的可选筛查提示：暂定宽泛筛选估算；须以经审查记录替换
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 100
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
宽废物筛选考虑干湿状态、含水、裁切排版、批次残余及返工；不是预期废弃率。

#### 采集要求：按实际材料区分的精整材料包装 (`finish_packaging`)

过程／待建立交换的方向／类型：`grout_finish` / `outputs` / `waste`.

按组成及去向区分包装；保留物品仍属库存。

- 采集对象：按实际材料区分的精整材料包装
- 流属性/单位: Mass / kg
- 数量规则: q_lot / A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_grout_finish`
- 尚待核实的可选筛查提示：暂定宽泛筛选估算；须以经审查记录替换
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 10
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
宽废物筛选考虑干湿状态、含水、裁切排版、批次残余及返工；不是预期废弃率。

#### 采集要求：按物种及受纳介质实测的精整排放 (`finish_release`)

过程／待建立交换的方向／类型：`grout_finish` / `outputs` / `elementary`.

按实际产品及操作条件纳入排放；选择身份前采集物种及受纳介质。

- 采集对象：按物种及受纳介质实测的精整排放
- 流属性/单位: Mass / kg
- 数量规则: q_lot / A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_grout_finish`
- 尚待核实的可选筛查提示：暂定宽泛筛选估算；须以经审查记录替换
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 5
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
宽排放筛选仅在物种及介质已知后提示数量级或单位错误；没有排放因子或假定发生。

## 6. 过程清单结构

生产按施工批段、房间、拌和批次和清洁事件索引。裁切提供待粘贴砖；粘结料拌和提供湿浆。粘贴将两者结合至供应基层，水化使粘结料凝结后才移交实测待填缝面积。填缝料拌和提供独立湿浆；精整填缝并按实际水泥基凝结条件处理，在验收前完成适用运动缝及清洁。不规定反应路径、水化比、强度或通用时长。不合格工作回到其产生工序且保留负担；拆除物属于废物，不得作为验收输出。

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| layout_cut | 排版及瓷砖裁切 | required | 实际施工批段操作；条件性交换逐项声明 | 单一责任阶段与实测交接 | 经 A 归一至 1 m2 accepted_tiled_floor |
| mortar_mix | 粘结浆配制与拌和 | required | 实际施工批段操作；条件性交换逐项声明 | 单一责任阶段与实测交接 | 经 A 归一至 1 m2 accepted_tiled_floor |
| bond_cure | 瓷砖粘贴与粘结料凝结 | required | 实际施工批段操作；条件性交换逐项声明 | 单一责任阶段与实测交接 | 经 A 归一至 1 m2 accepted_tiled_floor |
| grout_mix | 填缝浆配制与拌和 | required | 实际施工批段操作；条件性交换逐项声明 | 单一责任阶段与实测交接 | 经 A 归一至 1 m2 accepted_tiled_floor |
| grout_finish | 填缝、接缝处理、清洁与验收 | required | 实际施工批段操作；条件性交换逐项声明 | 单一责任阶段与实测交接 | 经 A 归一至 1 m2 accepted_tiled_floor |

### 过程：排版及瓷砖裁切（`layout_cut`）

#### 输入

##### 产品流

###### 制造完成的陶瓷地砖 (`whole_tiles`)

记录跨越 layout_cut 材料保管边界的陶瓷坯体、表面、尺寸及总质量，包括后来可用退回的砖；实际发入裁切量另行记录，并保留每次返工替换。

- 选定流: 制造完成的陶瓷地砖
- 流属性/单位: Mass / kg
- 数量规则: q_lot / A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_layout_cut`
- 数量范围: 暂定宽泛筛选估算；须以经审查记录替换
  - 范围角色: `qa_guardrail`
  - 下限: 5
  - 上限: 100
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
材料筛选较宽，因为产品厚度、配方、几何、临时辅助件及返工可变；实际产品/批次计量决定数值。


###### 裁切与清洁供应水 (`cut_water`)

湿式裁切或水清洁时纳入；新加水与循环水分开记录。

- 选定流: 裁切与清洁供应水
- 流属性/单位: Mass / kg
- 数量规则: q_lot / A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_layout_cut`
- 数量范围: 暂定宽泛筛选估算；须以经审查记录替换
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 100
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
用水筛选覆盖干作业至湿式裁切/拌和及清洁；循环水及实际配方仍须分开计量。


###### 裁切与抽尘供应电力 (`cut_electricity`)

计量工具与抽尘用电；仅在本节点使用时纳入照明分配份额。

- 选定流: 裁切与抽尘供应电力
- 流属性/单位: Energy / MJ
- 数量规则: q_lot / A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_layout_cut`
- 数量范围: 暂定宽泛筛选估算；须以经审查记录替换
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 100
  - 单位: MJ
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
宽能耗筛选考虑电动/手动工具选择、抽尘、照明及共享事件分配；不是供应商或设备规格。


##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 移交废物管理方的瓷砖边角料及碎砖 (`tile_offcuts`)

干碎片与含水裁切浆分开称量；保留再用的碎块仍属库存。

- 选定流: 移交废物管理方的瓷砖边角料及碎砖
- 流属性/单位: Mass / kg
- 数量规则: q_lot / A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_layout_cut`
- 数量范围: 暂定宽泛筛选估算；须以经审查记录替换
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 100
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
宽废物筛选考虑干湿状态、含水、裁切排版、批次残余及返工；不是预期废弃率。


###### 收集的裁切浆及受污染清洗水 (`cut_slurry`)

记录湿质量、固体证据与去向；其为受管理废物，并非基本流排放。

- 选定流: 收集的裁切浆及受污染清洗水
- 流属性/单位: Mass / kg
- 数量规则: q_lot / A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_layout_cut`
- 数量范围: 暂定宽泛筛选估算；须以经审查记录替换
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 150
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
宽废物筛选考虑干湿状态、含水、裁切排版、批次残余及返工；不是预期废弃率。


##### 基本流

### 过程：粘结浆配制与拌和（`mortar_mix`）

#### 输入

##### 产品流

###### 水泥基薄层粘结干混料 (`mortar_powder`)

采集产品等级、配方、干质量及实际供应商说明；不得替换为纯水泥。

- 选定流: 水泥基薄层粘结干混料
- 流属性/单位: Mass / kg
- 数量规则: q_lot / A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_mortar_mix`
- 数量范围: 暂定宽泛筛选估算；须以经审查记录替换
  - 范围角色: `qa_guardrail`
  - 下限: 0.01
  - 上限: 30
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
材料筛选较宽，因为产品厚度、配方、几何、临时辅助件及返工可变；实际产品/批次计量决定数值。


###### 拌和与设备清洗供应水 (`mortar_water`)

按批次区分拌和水、新鲜清洗水和循环水。

- 选定流: 拌和与设备清洗供应水
- 流属性/单位: Mass / kg
- 数量规则: q_lot / A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_mortar_mix`
- 数量范围: 暂定宽泛筛选估算；须以经审查记录替换
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 100
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
用水筛选覆盖干作业至湿式裁切/拌和及清洁；循环水及实际配方仍须分开计量。


###### 拌和供应电力 (`mortar_electricity`)

计量该批次搅拌机电量，包括已归属的清洗事件。

- 选定流: 拌和供应电力
- 流属性/单位: Energy / MJ
- 数量规则: q_lot / A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_mortar_mix`
- 数量范围: 暂定宽泛筛选估算；须以经审查记录替换
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 50
  - 单位: MJ
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
宽能耗筛选考虑电动/手动工具选择、抽尘、照明及共享事件分配；不是供应商或设备规格。


##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 新拌水泥基薄层粘结浆 (`fresh_mortar`)

按转移和批次标识称量交接时可用湿浆；排除不合格浆及保留库存。

- 选定流: 新拌水泥基薄层粘结浆
- 流属性/单位: Mass / kg
- 数量规则: q_lot / A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_mortar_mix`
- 数量范围: 暂定宽泛筛选估算；须以经审查记录替换
  - 范围角色: `qa_guardrail`
  - 下限: 0.01
  - 上限: 60
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
材料筛选较宽，因为产品厚度、配方、几何、临时辅助件及返工可变；实际产品/批次计量决定数值。


##### 废物流

###### 不合格及残余粘结混合料 (`mortar_mix_residue`)

保留干湿基准、凝结状态和实际去向；与设备清洗废液分开。

- 选定流: 不合格及残余粘结混合料
- 流属性/单位: Mass / kg
- 数量规则: q_lot / A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_mortar_mix`
- 数量范围: 暂定宽泛筛选估算；须以经审查记录替换
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 40
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
宽废物筛选考虑干湿状态、含水、裁切排版、批次残余及返工；不是预期废弃率。


###### 收集的搅拌设备清洗废液 (`mortar_wash_effluent`)

记录湿质量及已知组成；不得推断未计量的排水或空气排放。

- 选定流: 收集的搅拌设备清洗废液
- 流属性/单位: Mass / kg
- 数量规则: q_lot / A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_mortar_mix`
- 数量范围: 暂定宽泛筛选估算；须以经审查记录替换
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 150
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
宽废物筛选考虑干湿状态、含水、裁切排版、批次残余及返工；不是预期废弃率。


##### 基本流

### 过程：瓷砖粘贴与粘结料凝结（`bond_cure`）

#### 输入

##### 产品流

###### 粘贴工序接收的实测瓷砖 (`tiles_feed`)

对应 prepared_tiles 转移标识及数量；上游瓷砖负担只计一次。

- 选定流: 粘贴工序接收的实测瓷砖
- 流属性/单位: Mass / kg
- 数量规则: q_lot / A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_bond_cure`
- 数量范围: 暂定宽泛筛选估算；须以经审查记录替换
  - 范围角色: `qa_guardrail`
  - 下限: 5
  - 上限: 100
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
材料筛选较宽，因为产品厚度、配方、几何、临时辅助件及返工可变；实际产品/批次计量决定数值。


###### 粘贴工序接收的实测新拌粘结浆 (`mortar_feed`)

对应 fresh_mortar 转移及实测湿浆质量；不得将此投入强制设为 1。

- 选定流: 粘贴工序接收的实测新拌粘结浆
- 流属性/单位: Mass / kg
- 数量规则: q_lot / A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_bond_cure`
- 数量范围: 暂定宽泛筛选估算；须以经审查记录替换
  - 范围角色: `qa_guardrail`
  - 下限: 0.01
  - 上限: 60
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
材料筛选较宽，因为产品厚度、配方、几何、临时辅助件及返工可变；实际产品/批次计量决定数值。


###### 粘贴与凝结期间供应电力 (`bond_electricity`)

按实际纳入工具、照明与通风用电；凝结时长本身不意味着能耗。

- 选定流: 粘贴与凝结期间供应电力
- 流属性/单位: Energy / MJ
- 数量规则: q_lot / A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_bond_cure`
- 数量范围: 暂定宽泛筛选估算；须以经审查记录替换
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 100
  - 单位: MJ
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
宽能耗筛选考虑电动/手动工具选择、抽尘、照明及共享事件分配；不是供应商或设备规格。


##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：填缝浆配制与拌和（`grout_mix`）

#### 输入

##### 产品流

###### 水泥基填缝干混料 (`grout_powder`)

采集产品等级、配方、干质量及实际供应商说明；不得替换为纯水泥。

- 选定流: 水泥基填缝干混料
- 流属性/单位: Mass / kg
- 数量规则: q_lot / A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_grout_mix`
- 数量范围: 暂定宽泛筛选估算；须以经审查记录替换
  - 范围角色: `qa_guardrail`
  - 下限: 0.01
  - 上限: 30
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
材料筛选较宽，因为产品厚度、配方、几何、临时辅助件及返工可变；实际产品/批次计量决定数值。


###### 拌和与设备清洗供应水 (`grout_water`)

按批次区分拌和水、新鲜清洗水和循环水。

- 选定流: 拌和与设备清洗供应水
- 流属性/单位: Mass / kg
- 数量规则: q_lot / A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_grout_mix`
- 数量范围: 暂定宽泛筛选估算；须以经审查记录替换
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 100
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
用水筛选覆盖干作业至湿式裁切/拌和及清洁；循环水及实际配方仍须分开计量。


###### 拌和供应电力 (`grout_electricity`)

计量该批次搅拌机电量，包括已归属的清洗事件。

- 选定流: 拌和供应电力
- 流属性/单位: Energy / MJ
- 数量规则: q_lot / A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_grout_mix`
- 数量范围: 暂定宽泛筛选估算；须以经审查记录替换
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 50
  - 单位: MJ
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
宽能耗筛选考虑电动/手动工具选择、抽尘、照明及共享事件分配；不是供应商或设备规格。


##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 新拌水泥基填缝浆 (`fresh_grout`)

按转移和批次标识称量交接时可用湿浆；排除不合格浆及保留库存。

- 选定流: 新拌水泥基填缝浆
- 流属性/单位: Mass / kg
- 数量规则: q_lot / A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_grout_mix`
- 数量范围: 暂定宽泛筛选估算；须以经审查记录替换
  - 范围角色: `qa_guardrail`
  - 下限: 0.01
  - 上限: 60
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
材料筛选较宽，因为产品厚度、配方、几何、临时辅助件及返工可变；实际产品/批次计量决定数值。


##### 废物流

###### 不合格及残余填缝混合料 (`grout_mix_residue`)

保留干湿基准、凝结状态和实际去向；与设备清洗废液分开。

- 选定流: 不合格及残余填缝混合料
- 流属性/单位: Mass / kg
- 数量规则: q_lot / A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_grout_mix`
- 数量范围: 暂定宽泛筛选估算；须以经审查记录替换
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 40
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
宽废物筛选考虑干湿状态、含水、裁切排版、批次残余及返工；不是预期废弃率。


###### 收集的搅拌设备清洗废液 (`grout_wash_effluent`)

记录湿质量及已知组成；不得推断未计量的排水或空气排放。

- 选定流: 收集的搅拌设备清洗废液
- 流属性/单位: Mass / kg
- 数量规则: q_lot / A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_grout_mix`
- 数量范围: 暂定宽泛筛选估算；须以经审查记录替换
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 150
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
宽废物筛选考虑干湿状态、含水、裁切排版、批次残余及返工；不是预期废弃率。


##### 基本流

### 过程：填缝、接缝处理、清洁与验收（`grout_finish`）

#### 输入

##### 产品流

###### 精整工序接收的实测已凝结待填缝地面 (`floor_feed`)

按位置及转移标识对应 ungrouted_floor；不再新增另一项上游建筑投入。

- 选定流: 精整工序接收的实测已凝结待填缝地面
- 流属性/单位: Area / m2
- 数量规则: q_lot / A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_grout_finish`
- 数量范围: 暂定宽泛筛选估算；须以经审查记录替换
  - 范围角色: `qa_guardrail`
  - 下限: 0.5
  - 上限: 3
  - 单位: m2
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
内部面积筛选考虑相对验收面积的实测在制及返工；其不固定转移数量。


###### 接收的实测新拌水泥基填缝浆 (`grout_feed`)

对应 fresh_grout 批次及湿质量；实际缝几何决定消耗。

- 选定流: 接收的实测新拌水泥基填缝浆
- 流属性/单位: Mass / kg
- 数量规则: q_lot / A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_grout_finish`
- 数量范围: 暂定宽泛筛选估算；须以经审查记录替换
  - 范围角色: `qa_guardrail`
  - 下限: 0.01
  - 上限: 60
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
材料筛选较宽，因为产品厚度、配方、几何、临时辅助件及返工可变；实际产品/批次计量决定数值。


###### 精整与清洁供应水 (`finish_water`)

按清洁事件记录新鲜水；区分收集废水与循环水。

- 选定流: 精整与清洁供应水
- 流属性/单位: Mass / kg
- 数量规则: q_lot / A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_grout_finish`
- 数量范围: 暂定宽泛筛选估算；须以经审查记录替换
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 150
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
用水筛选覆盖干作业至湿式裁切/拌和及清洁；循环水及实际配方仍须分开计量。


###### 精整与清洁供应电力 (`finish_electricity`)

计量或分配实际工具、清洁和照明电量，不重复计入 shared_service 能源。

- 选定流: 精整与清洁供应电力
- 流属性/单位: Energy / MJ
- 数量规则: q_lot / A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_grout_finish`
- 数量范围: 暂定宽泛筛选估算；须以经审查记录替换
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 100
  - 单位: MJ
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
宽能耗筛选考虑电动/手动工具选择、抽尘、照明及共享事件分配；不是供应商或设备规格。


##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收合格的室内陶瓷地砖薄层粘贴服务 (`accepted_tiled_floor`)

验收净地面面积包括已完成的填缝、适用时的指定密封胶及清洁；排除不合格和未完工面积。

- 选定流: 验收合格的室内陶瓷地砖薄层粘贴服务
- 流属性/单位: Area / m2
- 数量规则: 1 m2
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_grout_finish`
- 数量范围: 仅为归一化恒等关系；不是产率证据
  - 范围角色: `qa_guardrail`
  - 下限: 1
  - 上限: 1
  - 单位: m2
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `calculated_from_collection`

##### 废物流

###### 收集的精整清洗废液 (`finish_effluent`)

按接管证据记录湿质量、固体和去向；直接排放须另设具体基本流交换。

- 选定流: 收集的精整清洗废液
- 流属性/单位: Mass / kg
- 数量规则: q_lot / A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_grout_finish`
- 数量范围: 暂定宽泛筛选估算；须以经审查记录替换
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 200
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
宽废物筛选考虑干湿状态、含水、裁切排版、批次残余及返工；不是预期废弃率。


##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| subdivide | all_processes | 先按房间、批段、批次和实测事件拆分。共享仪表按记录的运行时间及功率或实际分表证据分配，记录剩余不确定性；各份额之和须等于实测总量。 |  |
| single_owner | shared_service | 公共通道/设备服务保留单一事件责任方；记录五个使用节点及期间。该服务排除已计量能源及重复承包发票。 |  |
| rework | all_processes | 返工投入、清洁和废弃材料归于同一验收施工批段。按缺陷标识关联替换操作及退出。不将中间面积或失败面积计作最终输出。 |  |
| stock | whole_tiles | 瓷砖总发料 = 期初库存 + 收货 - 期末库存；whole_tiles 输入采用总发料，对外可用退回仅作为 tile_return 输出记录一次。净消耗 = 总发料 - 对外退回，是独立的上游负担归属数量，不是另一项物理交换或负信用。仅实际未用退回材料的原始上游负担可随退料转移；施工与返工负担保留于验收服务，不自动给予避免生产信用。期末库存与对外退回互斥；废物已在消耗中，不再扣除。 |  |

## 8. 前景数据采集、计算与质量规则

每项协议仅属于一个节点。用转移标识配对发出与接收记录，区分新鲜水与循环水，并标明清洁/换批责任。记录全部材料的干湿状态及产品/批次。实际供应商说明决定水剂量、齿镘选择、固化和清洁条件。不得借用其他产品的数值默认值。暂定范围是有意保留宽度的缺记录检查提示；其不是观察事实、默认值、符合性限值，也不证明未启用时为零。异常值须调查并保留证据，不得截断。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_layout_cut | layout_cut | whole_tiles; cut_water; cut_electricity; prepared_tiles; tile_return; tile_offcuts; cut_slurry; tile_packaging; cut_air_release | 施工批段计量及接管账 | row_id; measurement_id; gross; tare; count; unit_mass; volume; density; measurement_route; unit; unit_conversion; lot_id; room_id; batch_id; event_id; record_event_uid; defect_id; rework_iteration; transfer_id; product_grade; composition; moisture_basis; meter_start; meter_end; meter_unit; driver_node; drivers_total; shared_consumers; run_time; cleanup_owner; waste_destination; concentration; exhaust_volume; species; particle_size; receiving_medium; accepted_area_record_id; A; opening_stock; receipts; closing_stock; external_return; stock_event_id; actual_processing_draw; cut_layout; cutting_method; reuse_piece_id; release_measurement_scope; source_boundary; source_coverage_evidence; concentration_unit; concentration_representativeness; background_correction_evidence; gas_state_basis; exhaust_volume_unit; actual_full_source_flow_m3_s; interval_duration_s; sampled_air_volume; measured_total_release_kg; total_release_method; control_factor_basis; alternative_release_method; alternative_release_operands | 用 row_id 标明事件表中的每项实际交换。称量 gross/tare 或采用 count 与同产品实测 unit_mass；用水采用实测质量或 volume 与实测 density；保留 meter_start/end、meter_unit、全部 shared_consumers 及 driver_node/drivers_total；每项实际排放记录 species、size、receiving_medium、concentration、exhaust_volume 及 unit_conversion，或直接实测质量。每事件只选一条有记录的 measurement_route；记录校准及干湿状态。配对转移并明确记录未启用交换；同批段 A 取自签认的 grout_finish 验收。 按数量或称量记录实际发入裁切的瓷砖，与采购收货及互斥的期末库存/退回分开；保留排版及可用碎块记录。 释放计量遵循 event_release：记录完整事件和源覆盖、浓度基准与代表性及背景校正、实际源流量与区间时长或完整事件排气体积，并匹配气体状态。sampled_air_volume 或职业、室内暴露结果本身不能给出环境释放总量。保留独立支持的 measured_total_release_kg 及 total_release_method，或经验证的介质专属 alternative_release_method 及原始 alternative_release_operands；空气体积计算仅用于空气源流。记录 control_factor_basis 防止二次扣捕集，排除捕集废物，未知保留为定稿缺口，不能记零。 | kg; MJ | 每批次、转移及清洁；每批段一次验收 | 完整施工批段，包括失败及返工 | 一个声明的室内施工场址 | 每参考流 | 校准；签认面积表；供应商说明；库存/转移核对；发票；废物接收单；适用时的排放测量 |
| cp_mortar_mix | mortar_mix | mortar_powder; mortar_water; mortar_additives; mortar_electricity; fresh_mortar; mortar_mix_residue; mortar_wash_effluent; mortar_packaging; mortar_mix_release | 施工批段计量及接管账 | row_id; measurement_id; gross; tare; count; unit_mass; volume; density; measurement_route; unit; unit_conversion; lot_id; room_id; batch_id; event_id; record_event_uid; defect_id; rework_iteration; transfer_id; product_grade; composition; moisture_basis; meter_start; meter_end; meter_unit; driver_node; drivers_total; shared_consumers; run_time; cleanup_owner; waste_destination; concentration; exhaust_volume; species; particle_size; receiving_medium; accepted_area_record_id; A; powder_issued; mixing_water; additive_issued; opening_wetstock; closing_wetstock; transferred_wetpaste; captured_mix_residue; mix_material_in_wash; measured_mix_releases; unexplained_balance; wash_addition; opening_washstock; effluent_transferred; retained_captured_wash_residue; measured_wash_release; closing_washstock; unexplained_wash_balance; wetstock_moisture; residue_solids; wash_solids; crystallization_water_basis; mix_recipe_version; water_grade; batch_grade; formulation_record; batch_times; release_measurement_scope; source_boundary; source_coverage_evidence; concentration_unit; concentration_representativeness; background_correction_evidence; gas_state_basis; exhaust_volume_unit; actual_full_source_flow_m3_s; interval_duration_s; sampled_air_volume; measured_total_release_kg; total_release_method; control_factor_basis; alternative_release_method; alternative_release_operands | 用 row_id 标明事件表中的每项实际交换。称量 gross/tare 或采用 count 与同产品实测 unit_mass；用水采用实测质量或 volume 与实测 density；保留 meter_start/end、meter_unit、全部 shared_consumers 及 driver_node/drivers_total；每项实际排放记录 species、size、receiving_medium、concentration、exhaust_volume 及 unit_conversion，或直接实测质量。每事件只选一条有记录的 measurement_route；记录校准及干湿状态。配对转移并明确记录未启用交换；同批段 A 取自签认的 grout_finish 验收。 按批次等级/配方记录实际 powder_issued、mixing_water 和 additive_issued、期初/期末湿库存及湿浆交接质量。拌和池与清洗水池分开，计量浆的固体/水分及实际进入清洗的物料；保留结晶水口径，将未知去向记为平衡缺口而非假定排放。 释放计量遵循 event_release：记录完整事件和源覆盖、浓度基准与代表性及背景校正、实际源流量与区间时长或完整事件排气体积，并匹配气体状态。sampled_air_volume 或职业、室内暴露结果本身不能给出环境释放总量。保留独立支持的 measured_total_release_kg 及 total_release_method，或经验证的介质专属 alternative_release_method 及原始 alternative_release_operands；空气体积计算仅用于空气源流。记录 control_factor_basis 防止二次扣捕集，排除捕集废物，未知保留为定稿缺口，不能记零。 | kg; MJ | 每批次、转移及清洁；每批段一次验收 | 完整施工批段，包括失败及返工 | 一个声明的室内施工场址 | 每参考流 | 校准；签认面积表；供应商说明；库存/转移核对；发票；废物接收单；适用时的排放测量 |
| cp_bond_cure | bond_cure | tiles_feed; mortar_feed; bond_consumables; bond_electricity; ungrouted_floor; bond_reject; bond_release | 施工批段计量及接管账 | row_id; measurement_id; gross; tare; count; unit_mass; volume; density; measurement_route; unit; unit_conversion; lot_id; room_id; batch_id; event_id; record_event_uid; defect_id; rework_iteration; transfer_id; product_grade; composition; moisture_basis; meter_start; meter_end; meter_unit; driver_node; drivers_total; shared_consumers; run_time; cleanup_owner; waste_destination; concentration; exhaust_volume; species; particle_size; receiving_medium; accepted_area_record_id; A; length; width; area; internal_area; substrate_acceptance_record; mortar_batch_id; trowel_geometry; bed_thickness; tile_back_coverage; set_condition; cure_start; cure_end; cure_temperature; cure_humidity; supplier_gate_instruction; set_acceptance_record; release_measurement_scope; source_boundary; source_coverage_evidence; concentration_unit; concentration_representativeness; background_correction_evidence; gas_state_basis; exhaust_volume_unit; actual_full_source_flow_m3_s; interval_duration_s; sampled_air_volume; measured_total_release_kg; total_release_method; control_factor_basis; alternative_release_method; alternative_release_operands | 用 row_id 标明事件表中的每项实际交换。称量 gross/tare 或采用 count 与同产品实测 unit_mass；用水采用实测质量或 volume 与实测 density；保留 meter_start/end、meter_unit、全部 shared_consumers 及 driver_node/drivers_total；每项实际排放记录 species、size、receiving_medium、concentration、exhaust_volume 及 unit_conversion，或直接实测质量。每事件只选一条有记录的 measurement_route；记录校准及干湿状态。配对转移并明确记录未启用交换；同批段 A 取自签认的 grout_finish 验收。 计量本节点凝结地面转移几何，记录实际基层放行、粘结浆批次、粘结层/齿镘证据、凝结起止及条件、供应商交接说明和签认凝结验收后才移交。A 关联最终验收；不在此重复测最终 A。 释放计量遵循 event_release：记录完整事件和源覆盖、浓度基准与代表性及背景校正、实际源流量与区间时长或完整事件排气体积，并匹配气体状态。sampled_air_volume 或职业、室内暴露结果本身不能给出环境释放总量。保留独立支持的 measured_total_release_kg 及 total_release_method，或经验证的介质专属 alternative_release_method 及原始 alternative_release_operands；空气体积计算仅用于空气源流。记录 control_factor_basis 防止二次扣捕集，排除捕集废物，未知保留为定稿缺口，不能记零。 | kg; MJ; m2 | 每批次、转移及清洁；每批段一次验收 | 完整施工批段，包括失败及返工 | 一个声明的室内施工场址 | 每参考流 | 校准；签认面积表；供应商说明；库存/转移核对；发票；废物接收单；适用时的排放测量 |
| cp_grout_mix | grout_mix | grout_powder; grout_water; grout_additives; grout_electricity; fresh_grout; grout_mix_residue; grout_wash_effluent; grout_packaging; grout_mix_release | 施工批段计量及接管账 | row_id; measurement_id; gross; tare; count; unit_mass; volume; density; measurement_route; unit; unit_conversion; lot_id; room_id; batch_id; event_id; record_event_uid; defect_id; rework_iteration; transfer_id; product_grade; composition; moisture_basis; meter_start; meter_end; meter_unit; driver_node; drivers_total; shared_consumers; run_time; cleanup_owner; waste_destination; concentration; exhaust_volume; species; particle_size; receiving_medium; accepted_area_record_id; A; powder_issued; mixing_water; additive_issued; opening_wetstock; closing_wetstock; transferred_wetpaste; captured_mix_residue; mix_material_in_wash; measured_mix_releases; unexplained_balance; wash_addition; opening_washstock; effluent_transferred; retained_captured_wash_residue; measured_wash_release; closing_washstock; unexplained_wash_balance; wetstock_moisture; residue_solids; wash_solids; crystallization_water_basis; mix_recipe_version; water_grade; batch_grade; formulation_record; batch_times; release_measurement_scope; source_boundary; source_coverage_evidence; concentration_unit; concentration_representativeness; background_correction_evidence; gas_state_basis; exhaust_volume_unit; actual_full_source_flow_m3_s; interval_duration_s; sampled_air_volume; measured_total_release_kg; total_release_method; control_factor_basis; alternative_release_method; alternative_release_operands | 用 row_id 标明事件表中的每项实际交换。称量 gross/tare 或采用 count 与同产品实测 unit_mass；用水采用实测质量或 volume 与实测 density；保留 meter_start/end、meter_unit、全部 shared_consumers 及 driver_node/drivers_total；每项实际排放记录 species、size、receiving_medium、concentration、exhaust_volume 及 unit_conversion，或直接实测质量。每事件只选一条有记录的 measurement_route；记录校准及干湿状态。配对转移并明确记录未启用交换；同批段 A 取自签认的 grout_finish 验收。 按批次等级/配方记录实际 powder_issued、mixing_water 和 additive_issued、期初/期末湿库存及湿浆交接质量。拌和池与清洗水池分开，计量浆的固体/水分及实际进入清洗的物料；保留结晶水口径，将未知去向记为平衡缺口而非假定排放。 释放计量遵循 event_release：记录完整事件和源覆盖、浓度基准与代表性及背景校正、实际源流量与区间时长或完整事件排气体积，并匹配气体状态。sampled_air_volume 或职业、室内暴露结果本身不能给出环境释放总量。保留独立支持的 measured_total_release_kg 及 total_release_method，或经验证的介质专属 alternative_release_method 及原始 alternative_release_operands；空气体积计算仅用于空气源流。记录 control_factor_basis 防止二次扣捕集，排除捕集废物，未知保留为定稿缺口，不能记零。 | kg; MJ | 每批次、转移及清洁；每批段一次验收 | 完整施工批段，包括失败及返工 | 一个声明的室内施工场址 | 每参考流 | 校准；签认面积表；供应商说明；库存/转移核对；发票；废物接收单；适用时的排放测量 |
| cp_grout_finish | grout_finish | floor_feed; grout_feed; finish_water; movement_joint_materials; finish_consumables; shared_service; finish_electricity; accepted_tiled_floor; finish_residue; finish_effluent; finish_packaging; finish_release | 施工批段计量及接管账 | row_id; measurement_id; gross; tare; count; unit_mass; volume; density; measurement_route; unit; unit_conversion; lot_id; room_id; batch_id; event_id; record_event_uid; defect_id; rework_iteration; transfer_id; product_grade; composition; moisture_basis; meter_start; meter_end; meter_unit; driver_node; drivers_total; shared_consumers; run_time; cleanup_owner; waste_destination; concentration; exhaust_volume; species; particle_size; receiving_medium; accepted_area_record_id; A; length; width; area; internal_area; plan_dimensions; gross_plan_parts; openings; unfinished_area; rejected_area; accepted_area; deduction_region_ids; joint_width; joint_depth; joint_length; sealant_chemistry; cure_record; acceptance_date; service_start; service_end; shared_asset; shared_period; allocation_driver; release_measurement_scope; source_boundary; source_coverage_evidence; concentration_unit; concentration_representativeness; background_correction_evidence; gas_state_basis; exhaust_volume_unit; actual_full_source_flow_m3_s; interval_duration_s; sampled_air_volume; measured_total_release_kg; total_release_method; control_factor_basis; alternative_release_method; alternative_release_operands | 用 row_id 标明事件表中的每项实际交换。称量 gross/tare 或采用 count 与同产品实测 unit_mass；用水采用实测质量或 volume 与实测 density；保留 meter_start/end、meter_unit、全部 shared_consumers 及 driver_node/drivers_total；每项实际排放记录 species、size、receiving_medium、concentration、exhaust_volume 及 unit_conversion，或直接实测质量。每事件只选一条有记录的 measurement_route；记录校准及干湿状态。配对转移并明确记录未启用交换；同批段 A 取自签认的 grout_finish 验收。 测量总平面部分，每项互斥洞口/未完工/失败区域仅扣一次；检查填缝、运动缝处理及清洁。保留以小时计的 service_start/end；共享服务发票和全部实际使用者仅关联一次。 释放计量遵循 event_release：记录完整事件和源覆盖、浓度基准与代表性及背景校正、实际源流量与区间时长或完整事件排气体积，并匹配气体状态。sampled_air_volume 或职业、室内暴露结果本身不能给出环境释放总量。保留独立支持的 measured_total_release_kg 及 total_release_method，或经验证的介质专属 alternative_release_method 及原始 alternative_release_operands；空气体积计算仅用于空气源流。记录 control_factor_basis 防止二次扣捕集，排除捕集废物，未知保留为定稿缺口，不能记零。 | kg; MJ; m2; h | 每批次、转移及清洁；每批段一次验收 | 完整施工批段，包括失败及返工 | 一个声明的室内施工场址 | 每参考流 | 校准；签认面积表；供应商说明；库存/转移核对；发票；废物接收单；适用时的排放测量 |

### 计算规则

| rule_id | applies_to | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| event_mass | whole_tiles; cut_water; prepared_tiles; tile_return; tile_offcuts; cut_slurry; tile_packaging; mortar_powder; mortar_water; mortar_additives; fresh_mortar; mortar_mix_residue; mortar_wash_effluent; mortar_packaging; grout_powder; grout_water; grout_additives; fresh_grout; grout_mix_residue; grout_wash_effluent; grout_packaging; tiles_feed; mortar_feed; bond_consumables; bond_reject; grout_feed; finish_water; movement_joint_materials; finish_consumables; finish_residue; finish_effluent; finish_packaging | 称量时 event_quantity = gross - tare; 也可依所选 measurement_route 采用 event_quantity = count * unit_mass 或 volume * density，单位须一致; 每事件仅选一条路径并保留实测产品/干湿身份。 | gross; tare; count; unit_mass; volume; density; measurement_route | event_quantity |  |
| event_energy | cut_electricity; mortar_electricity; bond_electricity; grout_electricity; finish_electricity | meter_delta = meter_end - meter_start; share = driver_node / drivers_total; event_quantity = meter_delta * share; drivers_total 须为正，使用者份额合计须为 1; 独用仪表采用 share = 1; 分配后采用 electricity_convert 换算 kWh，MJ 读数保持不变。 | meter_start; meter_end; meter_unit; driver_node; drivers_total; shared_consumers | event_quantity |  |
| event_area | ungrouted_floor; floor_feed; accepted_tiled_floor | 每个实测矩形部分 survey_area = length * width; 其他几何采用测绘 area; A = 总测绘平面部分之和 - openings - unfinished_area - rejected_area; 扣除区域互斥且各仅扣一次; 对 ungrouted_floor 和 floor_feed，event_quantity = 各实际转移处的 internal_area; 对 accepted_tiled_floor，event_quantity = A; 不得默认向内部交接赋 A。 | length; width; area; internal_area; plan_dimensions; gross_plan_parts; openings; unfinished_area; rejected_area; cp_bond_cure; cp_grout_finish | A; event_quantity |  |
| event_service | shared_service | service_hours = service_end - service_start，单位小时; share = driver_node / drivers_total; event_quantity = service_hours * share; 列出全部使用者并排除已记录的运行能源; 按有记录的等效小时计费时保留供应服务数量。 | service_start; service_end; driver_node; drivers_total; shared_consumers; shared_asset; shared_period | event_quantity |  |
| event_release | cut_air_release; mortar_mix_release; grout_mix_release; bond_release; finish_release | 对每个实际物种、粒径和接收介质事件，event_quantity 是完整事件释放质量 kg，不是采样捕集量或房间、职业暴露结果。选择一种有据路径：使用经验证 total_release_method 得到的 event_quantity = measured_total_release_kg，并保留 release_measurement_scope、source_boundary 和 source_coverage_evidence；或仅对实际空气源流，按覆盖的各区间对具有代表性、扣背景并换为 kg/m3 的浓度乘 actual_full_source_flow_m3_s 及 interval_duration_s 积分。仅当 exhaust_volume 是恰好同一所代表事件或区间的实测完整环境源流体积，且 gas_state_basis、浓度单位、exhaust_volume_unit、background_correction_evidence 与 concentration_representativeness 均相容时，才允许 concentration * exhaust_volume * unit_conversion；浓度或流量变化时采用分区间积分。sampled_air_volume 仅是样品分析证据，不能作为完整排气体积。弥散、职业或室内采样须有独立验证的完整源通量桥才能建立事件总质量。水、土壤或其他实际接收介质不能套空气排气体积；须有独立支持的完整事件质量，或具有原始 alternative_release_operands、相容单位、时间及源覆盖和不确定性的经验证介质专属 alternative_release_method。捕集废物不是环境释放；按 control_factor_basis，已经表示控制后释放的量不能再次扣捕集。发生状态、覆盖、换算或身份未知保留数据缺口，不能记零。不同真实事件各计一次，仅经 lot_to_area 归一化。 | concentration; exhaust_volume; unit_conversion; gross; tare; species; particle_size; receiving_medium; release_measurement_scope; source_boundary; source_coverage_evidence; concentration_unit; concentration_representativeness; background_correction_evidence; gas_state_basis; exhaust_volume_unit; actual_full_source_flow_m3_s; interval_duration_s; sampled_air_volume; measured_total_release_kg; total_release_method; control_factor_basis; alternative_release_method; alternative_release_operands | event_quantity | epa-eiip-sample-source-flow |
| card_quantity | all inventory rows | q_lot = 同 row_id 与 lot_id 的 event_quantity 合计，须先核对同节点事件归属及单位; 仅删除同一物理事件的重复记录，每次实际重复返工均按其迭次保留; whole_tiles 与 tile_return 采用 stock_draw，拌和材料/浆/废物/排放卡采用其节点的卡数量桥梁，不再重复事件求和; 实测转移不得强制赋值; 不将循环水加作新鲜供应。 | event_quantity; row_id; lot_id; cp_layout_cut; cp_mortar_mix; cp_bond_cure; cp_grout_mix; cp_grout_finish | q_lot |  |
| mortar_card_bridge | mortar_powder; mortar_water; mortar_additives; fresh_mortar; mortar_mix_residue; mortar_wash_effluent; mortar_mix_release | mortar_powder_lot = powder_issued; mortar_water_lot = mixing_water + wash_addition; mortar_additives_lot = additive_issued; fresh_mortar_lot = transferred_wetpaste; mortar_mix_residue_lot = captured_mix_residue + retained_captured_wash_residue; mortar_wash_effluent_lot = effluent_transferred; mortar_mix_release_lot = measured_mix_releases + measured_wash_release; 用水合计仅为新鲜加入，排除循环水; 归入拌和残余卡的残余与转出清洗废液互斥; 每项实际具体物种排放按所属池/事件标识且仅计一次; 这些逐卡批段总量成为面积除法所用 q_lot。 | powder_issued; mixing_water; wash_addition; additive_issued; transferred_wetpaste; captured_mix_residue; retained_captured_wash_residue; effluent_transferred; measured_mix_releases; measured_wash_release; cp_mortar_mix | q_lot |  |
| grout_card_bridge | grout_powder; grout_water; grout_additives; fresh_grout; grout_mix_residue; grout_wash_effluent; grout_mix_release | grout_powder_lot = powder_issued; grout_water_lot = mixing_water + wash_addition; grout_additives_lot = additive_issued; fresh_grout_lot = transferred_wetpaste; grout_mix_residue_lot = captured_mix_residue + retained_captured_wash_residue; grout_wash_effluent_lot = effluent_transferred; grout_mix_release_lot = measured_mix_releases + measured_wash_release; 用水合计仅为新鲜加入，排除循环水; 归入拌和残余卡的残余与转出清洗废液互斥; 每项实际具体物种排放按所属池/事件标识且仅计一次; 这些逐卡批段总量成为面积除法所用 q_lot。 | powder_issued; mixing_water; wash_addition; additive_issued; transferred_wetpaste; captured_mix_residue; retained_captured_wash_residue; effluent_transferred; measured_mix_releases; measured_wash_release; cp_grout_mix | q_lot |  |
| mix_state_balance | mortar_mix; grout_mix | powder_issued + mixing_water + additive_issued + opening_wetstock = transferred_wetpaste + captured_mix_residue + mix_material_in_wash + measured_mix_releases + closing_wetstock + unexplained_balance; 核对兼容实测湿质量，原粉结晶水包括在发出粉质量中，保留水化水仍在浆/残余中; 未知去向为 unexplained_balance，不是排放或强制产率。 | powder_issued; mixing_water; additive_issued; opening_wetstock; transferred_wetpaste; captured_mix_residue; mix_material_in_wash; measured_mix_releases; closing_wetstock; unexplained_balance; cp_mortar_mix; cp_grout_mix | mix_balance |  |
| wash_state_balance | mortar_mix; grout_mix | wash_addition + mix_material_in_wash + opening_washstock = effluent_transferred + retained_captured_wash_residue + measured_wash_release + closing_washstock + unexplained_wash_balance; mixing_water 排除 wash_addition，captured_mix_residue 排除已送入清洗的物料; 保留实测湿质量/固体基准且每项接管事件计一次，不虚构直接排放。 | wash_addition; mix_material_in_wash; opening_washstock; effluent_transferred; retained_captured_wash_residue; measured_wash_release; closing_washstock; unexplained_wash_balance; cp_mortar_mix; cp_grout_mix | wash_balance |  |
| lot_to_area | all inventory rows | q_norm = q_lot / A; q_lot 为声明节点在记录单位下的实测或已分配交换; A 为同批段验收净地面面积（m2），须为正数。 | q_lot; A; cp_layout_cut; cp_mortar_mix; cp_bond_cure; cp_grout_mix; cp_grout_finish | q_norm |  |
| stock_draw | whole_tiles; tile_return | gross_issue = opening_stock + receipts - closing_stock; whole_tiles_lot = gross_issue; tile_return_lot = external_return; net_consumed = gross_issue - external_return; 将 net_consumed 与独立实测 actual_processing_draw 核对，其指实际加工领用，排除未用对外退回，包含裁切损耗及返工新投入材料，不重复计同块材料的内部再裁，不得与采购收货等同; 区分物理总输入/退回输出与净负担归属; 库存与退回事件标识互斥，废物不再扣除。 | opening_stock; receipts; closing_stock; external_return; actual_processing_draw; cp_layout_cut | gross_issue; tile_return_lot; net_consumed |  |
| electricity_convert | cut_electricity; mortar_electricity; bond_electricity; grout_electricity; finish_electricity | electricity_MJ = electricity_kWh * 3.6 | electricity_kWh | electricity_MJ |  |
| transfer_reconcile | all inventory rows | sending_quantity = receiving_quantity + documented_transfer_loss; 按相同转移标识、单位和干湿状态核对; 损失仅由发出节点计一次，材料采用 kg，地面转移采用 m2。 | sending_quantity; receiving_quantity; documented_transfer_loss | transfer_balance |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| identity | all inventory rows | TIDAS 发布前将每项实际交换解析为兼容具体流；概括卡可展开多项交换，但不得改变服务范围。 | 流详情及支持流属性/单位证据 |
| completeness | all_processes | 覆盖完整批次、清洁、换批、库存、废弃和共享事件；条件性缺席须有证据，不得将空白等同零。 | 事件账及核对记录 |
| qualifiers | accepted_tiled_floor | 保留就绪基层、产品、几何、接缝、固化及验收限定信息；不声明未经核实的耐久性或粘结强度。 | 设计、产品说明书及签认检查 |
| screening | all inventory rows | 用独立经审查场址/批段替换暂定范围；同批段最大值不能验证其自身。报告不确定性与异常值。 | 独立范围审查及质量声明 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| area_gate | accepted_tiled_floor | 要求 A > 0 且只有一个验收输出。不合格、未完工及中间面积排除于 A 及最终销售输出。 |  |
| transfer_gate | all_processes | 配对全部瓷砖、浆和地面转移；核对库存及干湿平衡，不要求失水水化浆等于干粉。 |  |
| event_gate | all_processes | 检查运行/批次关联、返工路径、废物接管、共享使用者份额及单一事件归属。缺证据即完整性失败。 |  |
| identity_gate | all inventory rows | 核实实际配方、服务交接点、流类型、流属性/单位及排放介质；不得把制造砖改称服务或猜测密封胶/粉尘身份。 |  |
| range_gate | all inventory rows | 用计量证据调查宽泛筛选异常值。暂定筛选界限不证明符合性、发布就绪或缺失流为零。 |  |
| validate_physical_slurry_stream | all collected wastewater/slurry | 废水/浆液卡仅表示一个接收门槛下真实未物理分离的液固混合物流。分别收集的液体、已分离固体或不同处理去向须建立独立实际交换，不能为适配本卡而重新合并。混合物总质量与所含水/固体属于不可相加的视图。 |  |
| validate_release_coverage | all_processes | 按 event_release 核对五节点协议的独立完整事件与源覆盖、相容浓度和载体单位及气体状态、背景校正、物种粒径介质及实测总量或经验证实际方法。拒绝将采样或室内暴露质量作事件总量、将空气排气式套用于其他介质、重复扣捕集或把覆盖缺失推定为零；数据包定稿前保留缺口。 | epa-eiip-sample-source-flow |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_data_package; secondary_dataset |
| downstream_use | 兼容过程及生命周期模型投影；经审查后可成为相同安装交接点的 background_dataset |
| allowed_use | 基层、产品、接缝及验收限定信息相符的按面积室内陶瓷地砖薄层粘贴服务 |
| excluded_use | 制造瓷砖生产、墙面/石材/环氧路线、基层/膜层施工、建筑使用及通用寿命比较 |
| required_metadata | 地域/场址；批段/日期；验收 A；基层供应交接点；瓷砖/粘结料/填缝料等级；接缝/密封胶设计；生产模式；转移；供应商/上游关联；共享资源归属 |
| required_quality_disclosure | 实测/计算覆盖；未发生/未知交换；未解身份；暂定范围状态；分配/库存/返工证据；不确定性；排除上游施工 |
| update_trigger | 瓷砖体系、基层交接点、化学组成、接缝设计、技术、供应商说明、场址实践或重要计量证据变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| mapei-floor-installation | handbook | MAPEI Home, Floors (accessed 2026-10-12): https://mapeihome.com/flooranddecor/projects/floors/ | 路线阶段、实际产品说明及接缝/清洁责任；非通用用量或时间 |
| laticrete-thinsets | handbook | LATICRETE, Thinsets FAQ (accessed 2026-10-12): https://www.laticrete.com/support-and-training/downloads-and-faq/faqs/planning-a-job/thinsets | 就绪基层前提及独立修正责任 |
| epa-eiip-sample-source-flow | official_guidance | US EPA, EIIP Volume II Chapter 2, Preferred and Alternative Methods for Estimating Air Emissions from Boilers, 8 January 2001, printed p. 2.4-13 / PDF page 53, equation 2.4-12. https://19january2021snapshot.epa.gov/sites/static/files/2015-08/documents/ii02.pdf | 仅支持样品质量与完整源流排放率的计量区别；不采用锅炉因子、控制效率、安装排放默认值或非空气介质方法。 |
