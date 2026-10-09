---
title: Getting started with TianGong PCR
language: en-US
---

# Getting started with TianGong PCR

Use TianGong product category rules to create LCA data, optionally produce a
TIDAS process, or review an existing TIDAS process/lifecycle model. This guide is
for the Agent carrying out the user's task. Respond in the user's language.

## Start from the user's task

A user can give an Agent this prompt, replacing the bracketed product:

```text
Read https://pcr.tiangong.earth/getting-started.md and use TianGong PCR to
help me create LCA data for [product]. Prepare the tools and Skill, select
applicable methodology, and work from the evidence I provide. Deliver the
scope, reference flow, inventory, sources and remaining data gaps. Group
questions when you need more information from me.
```

For TIDAS creation, add: "Produce a native TIDAS process and report the format
validation results." For review, replace the creation request with: "Review
the TIDAS process/model at [file path], explaining confirmed issues, suspected
anomalies and evidence gaps with field locations and PCR references."

## 1. Prepare the tools and read the Skill

Check the existing environment first. Reuse compatible installed tools and an
existing task directory. Honor an explicit offline request, local library or
version selection before running any network command.

The qualified task workflow uses Node.js 24.19.0 (supported range
`>=24.19.0 <25`), Tiangong CLI 0.1.25 or later, and a compatible PCR reader.
Supported platforms are macOS ARM64, Linux x64/ARM64 and Windows x64.

For a **new connected installation**, use a dedicated tools directory:

```sh
npm install --save-exact @tiangong-lca/cli@latest @tiangong-lca/pcr@latest
./node_modules/.bin/tiangong-lca pcr snapshot ensure --help
./node_modules/.bin/tiangong-pcr --help
```

`latest` resolves published npm packages; keep the resulting package lock and
installed versions. Do not upgrade tools already pinned to an ongoing task.
Read each installed package's README for its runtime requirements. On Windows,
use the corresponding `node_modules/.bin/*.cmd` executables.

Read `node_modules/@tiangong-lca/pcr/skills/tiangong-pcr/SKILL.md` and follow its
task route. Its `references/` directory contains the detailed authoring and review
instructions. To make the Skill discoverable in later sessions, install the
**whole Skill directory** according to the host Agent's setup. npm installation
alone does not activate a Skill; the current Agent can read these files directly.

The PCR package supplies the offline reader and Skill. Tiangong CLI prepares
and pins published content separately, so this route does not require installing
`@tiangong-lca/pcr-library`. Public PCR preparation needs no account login.

## 2. Prepare one immutable task snapshot

Choose a dedicated absolute task directory; keep using it when continuing this
work. Replace all angle-bracket placeholders below with actual paths. Run these
commands from the tools installation directory:

```sh
./node_modules/.bin/tiangong-lca pcr snapshot ensure --task-dir <absolute-task-dir> --tool-root <absolute-tools-dir>/node_modules/@tiangong-lca/pcr --json
./node_modules/.bin/tiangong-lca pcr snapshot status --task-dir <absolute-task-dir> --json
```

Continue when the result has `task_usable: true`. A new connected task selects
the latest compatible complete stable PCR release. An existing task reuses its
content and reader pins without checking for a newer release. Keep the task's
lock files, installed reader and verified cache available with the work.

Use `ensure --version <published-version>` when a version was explicitly selected.
Reader and content versions may differ when their declared compatibility permits
it. If preparation fails, retain the error and resolve the missing or incompatible
input; do not bypass verification or replace an existing task's pins.

## 3. Select methodology and carry out the task

Route PCR commands through the prepared task:

```sh
./node_modules/.bin/tiangong-lca pcr exec --task-dir <absolute-task-dir> -- tree --format markdown
./node_modules/.bin/tiangong-lca pcr exec --task-dir <absolute-task-dir> -- list --path-prefix <domain/subdomain> --format json
./node_modules/.bin/tiangong-lca pcr exec --task-dir <absolute-task-dir> -- guidance --pcr <returned-pcr-id> --topic overview --format json
```

Use IDs and paths returned by browsing, or `resolve` when the user supplies a
classification code or PCR ID. Explain applicability to the product, process
boundary, technology and reference basis. Check `readiness.usable_for_guidance`;
candidate methodology remains review-required. If no suitable PCR is available,
report the gap rather than inventing a rule or an accepted classification mapping.

Read the relevant guidance topics and complete source context before applying
rules. Save large results with `--output <new-file>` and follow pagination.
`pcr exec` supplies the task's library and hash: pass query/page arguments, but
remove standalone `--library`, `--library-sha256` and `--root` selectors from
returned continuation commands. Inputs and outputs resolve from the task
directory; use absolute paths for files elsewhere.

Choose the corresponding reference inside the installed Skill:

| User task | Skill reference | Deliverable |
| --- | --- | --- |
| Create or improve LCA data | `references/lca-authoring.md` | Scope, reference flow, inventory with units and sources, assumptions and data gaps in a useful format. |
| Create a TIDAS process | `references/tidas-authoring.md`, after LCA authoring | Native process draft, field mapping, evidence and available TIDAS format-validation results. |
| Review a TIDAS process/model | `references/reviewing-tidas.md` | Confirmed issues, suspected anomalies and evidence gaps, each with input locations, PCR references, reasoning and review limits. |

Use `inspect` for native TIDAS inputs and explicitly supplied local references,
`calculate` for arithmetic with justified quantities and conversion factors, and
`review prepare` / `review check` for the review artifact. Their `--help` works
after `pcr exec ... --`. The Agent investigates and writes the conclusions.
`review check` validates the report envelope and references; it does not certify
the reasoning. TIDAS structure validation belongs to the separately provisioned
TIDAS toolkit/SDK. General LCA authoring requires neither TIDAS nor a fixed data
package format. Legacy `validate-model` / `validate-dataset` are limited presence
checks, not semantic TIDAS reviews.

## Fully offline use

Prepare the Node runtime, tools, complete Skill, content and any TIDAS tools before
disconnecting. Save this guide locally too. The host Agent/model must also be
available offline for fully offline reasoning.

For a task on a machine with Tiangong CLI and a verified content cache, add
`--offline` to `snapshot ensure`; an explicit `--version` selects a cached version.
Continue through `pcr exec` using that task's pins. Missing cached content is a
preparation gap, not permission to fetch it. Copying task lock files to another
machine alone does not transfer the selected tools or cache.

For a **standalone offline installation**, obtain published compatible
`@tiangong-lca/pcr` and `@tiangong-lca/pcr-library` tarballs with `npm pack` while
connected. Transfer both tarballs and Node to the offline machine. In a dedicated
directory, replace the filenames below with the actual local tarballs:

```sh
npm install --offline --ignore-scripts --no-audit --no-fund ./tiangong-lca-pcr-<reader-version>.tgz ./tiangong-lca-pcr-library-<content-version>.tgz
./node_modules/.bin/tiangong-pcr library verify --library <absolute-library.sqlite> --library-sha256 sha256:<trusted-hash> --format json
./node_modules/.bin/tiangong-pcr guidance --library <absolute-library.sqlite> --library-sha256 sha256:<trusted-hash> --pcr <returned-pcr-id> --topic overview --format json
```

The content package holds `library.sqlite` and its adjacent manifest; preserve
both. Obtain the expected database hash from trusted release metadata during
preparation and retain it with the task. Use the same explicit library/hash on
standalone content commands. Read the bundled Skill's standalone route. This
mode needs no Tiangong CLI and makes no automatic content downloads. Its library
contains English methodology; the Agent can explain its findings in the user's
language.

For task-managed local-file selection, `ensure --library <absolute-path>
--library-sha256 sha256:<trusted-hash> --offline` supports only the local profiles
documented by the installed CLI. Other snapshots need their verified release
metadata/cache; a database file alone does not establish that compatibility.

## Evidence and further reading

Keep observed data, calculations, assumptions and unknowns distinct. Cite the
selected PCR, its readiness and snapshot identity, and the original input fields.
Group necessary questions for the user; leave unsupported inventory values as
gaps. Review findings do not authorize source-data edits or publication.

- [PCR reader and installation](https://www.npmjs.com/package/@tiangong-lca/pcr)
- [English offline content package](https://www.npmjs.com/package/@tiangong-lca/pcr-library)
- [Tiangong CLI](https://www.npmjs.com/package/@tiangong-lca/cli)
- [Skill source](https://github.com/tiangong-lca/pcr/blob/main/skills/tiangong-pcr/SKILL.md) — prefer the copy shipped with the selected reader for execution.
- [Agent consumption contract](https://github.com/tiangong-lca/pcr/blob/main/docs/agentic-consumption.md)
- [Offline distribution contract](https://github.com/tiangong-lca/pcr/blob/main/docs/offline-distribution.md)
