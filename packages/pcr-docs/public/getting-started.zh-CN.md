---
title: 开始使用天工 PCR
language: zh-CN
---

# 开始使用天工 PCR

使用天工产品类别规则创建 LCA 数据，也可以进一步生成 TIDAS process，或审核已有的 TIDAS process / 生命周期模型。本指南供执行用户任务的 Agent 阅读，请使用用户的语言回复。

## 从用户的任务开始

用户可以直接将以下提示词交给 Agent，并替换方括号中的产品名称：

```text
阅读 https://pcr.tiangong.earth/getting-started.zh-CN.md，使用天工 PCR 帮助我创建 [产品] 的 LCA 数据。准备工具和 Skill，选择适用的方法学，基于我提供的证据开展工作。交付范围、参考流、清单、来源和剩余数据缺口。需要更多信息时，请集中向我提问。
```

如需创建 TIDAS 数据，可追加：“生成原生 TIDAS process，并报告格式验证结果。”如需审核，可将创建任务替换为：“审核 [文件路径] 中的 TIDAS process / model，说明已确认的问题、疑似异常和证据缺口，并标明字段位置及 PCR 引用。”

## 1. 准备工具并阅读 Skill

先检查已有环境，复用兼容的已安装工具和现有任务目录。运行任何联网命令前，遵守用户明确提出的离线要求、本地文库选择或版本选择。

已验证的任务工作流使用 Node.js 24.19.0（支持范围为 `>=24.19.0 <25`）、Tiangong CLI 0.1.25 或更新版本，以及兼容的 PCR reader。支持的平台包括 macOS ARM64、Linux x64 / ARM64 和 Windows x64。

对于**新的联网安装**，使用独立的工具目录：

```sh
npm install --save-exact @tiangong-lca/cli@latest @tiangong-lca/pcr@latest
./node_modules/.bin/tiangong-lca pcr snapshot ensure --help
./node_modules/.bin/tiangong-pcr --help
```

`latest` 会解析已发布的 npm 包，请保留安装后生成的 package lock 和已安装版本。不要升级进行中任务已经固定的工具。阅读每个已安装包的 README，了解其运行环境要求。在 Windows 上使用对应的 `node_modules/.bin/*.cmd` 可执行文件。

阅读 `node_modules/@tiangong-lca/pcr/skills/tiangong-pcr/SKILL.md`，按其中的任务路由执行。`references/` 目录包含详细的编写和审核指导。若希望后续会话自动发现该 Skill，请按宿主 Agent 的配置方式安装**整个 Skill 目录**。仅安装 npm 包不会激活 Skill；当前 Agent 可以直接读取这些文件。

PCR 包提供离线 reader 和 Skill。Tiangong CLI 单独准备并固定已发布内容，因此这条任务路线不要求安装 `@tiangong-lca/pcr-library`。准备公共 PCR 内容不需要账号登录。

## 2. 准备一个不可变的任务快照

选择独立的绝对路径任务目录，后续继续工作时复用该目录。将下列尖括号占位符替换为实际路径，在工具安装目录运行：

```sh
./node_modules/.bin/tiangong-lca pcr snapshot ensure --task-dir <absolute-task-dir> --tool-root <absolute-tools-dir>/node_modules/@tiangong-lca/pcr --json
./node_modules/.bin/tiangong-lca pcr snapshot status --task-dir <absolute-task-dir> --json
```

结果包含 `task_usable: true` 时继续。新的联网任务会选择最新兼容且完整的稳定 PCR release。已有任务会复用固定的内容和 reader，不检查更新。请将任务锁文件、已安装 reader 和经过验证的缓存与工作成果一起保留。

用户明确指定版本时，使用 `ensure --version <published-version>`。reader 与内容版本可以不同，前提是其声明的兼容性允许。准备失败时，保留错误并解决缺失或不兼容的输入，不要绕过验证或替换已有任务固定的版本。

## 3. 选择方法学并执行任务

通过已经准备好的任务执行 PCR 命令：

```sh
./node_modules/.bin/tiangong-lca pcr exec --task-dir <absolute-task-dir> -- tree --format markdown
./node_modules/.bin/tiangong-lca pcr exec --task-dir <absolute-task-dir> -- list --path-prefix <domain/subdomain> --format json
./node_modules/.bin/tiangong-lca pcr exec --task-dir <absolute-task-dir> -- guidance --pcr <returned-pcr-id> --topic overview --format json
```

使用浏览结果返回的 ID 和路径；用户提供分类代码或 PCR ID 时，使用 `resolve`。说明规则对产品、过程边界、技术和参考基准的适用性。检查 `readiness.usable_for_guidance`，候选方法学仍然需要评审。没有适用 PCR 时，报告缺口，不要编造规则或已接受的分类映射。

应用规则前，阅读相关 guidance 主题和完整的来源上下文。较大结果通过 `--output <new-file>` 保存，并按分页继续读取。`pcr exec` 会提供任务固定的文库及其哈希：传入查询和分页参数，但要从返回的后续命令中去掉独立运行时使用的 `--library`、`--library-sha256` 和 `--root` 选择器。输入和输出路径相对于任务目录解析；其他位置的文件使用绝对路径。

选择已安装 Skill 中对应的参考文档：

| 用户任务 | Skill 参考文档 | 交付内容 |
| --- | --- | --- |
| 创建或完善 LCA 数据 | `references/lca-authoring.md` | 范围、参考流、包含单位和来源的清单、假设和数据缺口，采用适合任务的格式。 |
| 创建 TIDAS process | 完成 LCA 编写后使用 `references/tidas-authoring.md` | 原生 process 草稿、字段映射、证据及可获得的 TIDAS 格式验证结果。 |
| 审核 TIDAS process / model | `references/reviewing-tidas.md` | 已确认的问题、疑似异常和证据缺口；每项包含输入位置、PCR 引用、推理和审核限制。 |

使用 `inspect` 读取原生 TIDAS 输入及明确提供的本地引用，使用 `calculate` 对具有依据的数量和换算因子进行计算，使用 `review prepare` / `review check` 处理审核产物。在 `pcr exec ... --` 后也可以使用这些命令的 `--help`。Agent 负责调查并撰写结论。`review check` 验证报告结构和引用，不认证推理结论。TIDAS 结构验证由单独准备的 TIDAS toolkit / SDK 承担。一般 LCA 数据编写不要求使用 TIDAS，也不要求固定的数据包格式。旧的 `validate-model` / `validate-dataset` 仅检查内容是否存在，不构成 TIDAS 语义审核。

## 完全离线使用

断网前准备好 Node 运行环境、工具、完整 Skill、内容和所需的 TIDAS 工具，并将本指南保存到本地。要完全离线推理，宿主 Agent / 模型也必须能够离线使用。

机器已有 Tiangong CLI 和经过验证的内容缓存时，在 `snapshot ensure` 中追加 `--offline`；显式 `--version` 用于选择已缓存的版本。继续通过 `pcr exec` 使用该任务固定的内容。缺少缓存表示准备不完整，不代表允许联网获取。仅将任务锁文件复制到另一台机器，不会同时转移所选工具或缓存。

对于**独立离线安装**，联网时使用 `npm pack` 获取已发布且互相兼容的 `@tiangong-lca/pcr` 和 `@tiangong-lca/pcr-library` tarball。将两个 tarball 和 Node 转移到离线机器。在独立目录中，将下列文件名替换为实际的本地 tarball：

```sh
npm install --offline --ignore-scripts --no-audit --no-fund ./tiangong-lca-pcr-<reader-version>.tgz ./tiangong-lca-pcr-library-<content-version>.tgz
./node_modules/.bin/tiangong-pcr library verify --library <absolute-library.sqlite> --library-sha256 sha256:<trusted-hash> --format json
./node_modules/.bin/tiangong-pcr guidance --library <absolute-library.sqlite> --library-sha256 sha256:<trusted-hash> --pcr <returned-pcr-id> --topic overview --format json
```

内容包包含 `library.sqlite` 和相邻的 manifest，必须同时保留。准备时从可信 release 元数据获取预期数据库哈希，并与任务一起保留。独立内容命令使用相同的显式文库路径和哈希，并遵循随包 Skill 的独立使用路线。此模式不需要 Tiangong CLI，也不会自动下载内容。文库的方法学内容为英文，Agent 可以使用用户的语言解释结果。

若通过任务管理选择本地文件，`ensure --library <absolute-path> --library-sha256 sha256:<trusted-hash> --offline` 仅支持已安装 CLI 文档列出的本地 profile。其他快照需要其经过验证的 release 元数据或缓存；单独一个数据库文件不能证明这种兼容性。

## 证据与进一步阅读

区分观测数据、计算结果、假设和未知信息。引用所选 PCR、其可用状态和快照身份，以及原始输入字段。集中向用户提出必要的问题，对缺乏依据的清单数值保留缺口。审核发现不授权修改源数据或发布。

- [PCR reader 与安装](https://www.npmjs.com/package/@tiangong-lca/pcr)
- [英文离线内容包](https://www.npmjs.com/package/@tiangong-lca/pcr-library)
- [Tiangong CLI](https://www.npmjs.com/package/@tiangong-lca/cli)
- [Skill 源文件](https://github.com/tiangong-lca/pcr/blob/main/skills/tiangong-pcr/SKILL.md) — 执行时优先使用所选 reader 随包提供的版本。
- [Agent 内容使用契约](https://github.com/tiangong-lca/pcr/blob/main/docs/agentic-consumption.md)
- [离线分发契约](https://github.com/tiangong-lca/pcr/blob/main/docs/offline-distribution.md)
