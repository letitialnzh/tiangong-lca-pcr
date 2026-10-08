# @tiangong-lca/pcr-library

An immutable, indexed snapshot of TianGong LCA product category rules (PCRs) and
data-production methodology for fully offline use. This is a **content package**:
use [`@tiangong-lca/pcr`](https://www.npmjs.com/package/@tiangong-lca/pcr) to browse, resolve,
read guidance, and verify the snapshot.

## Contents

| File | Purpose |
| --- | --- |
| `library.sqlite` | Indexed catalog, PCR and module content, classification coverage, mappings, and compatibility aliases |
| `library.sqlite.json` | Snapshot version, source commit, source fingerprint, format version, and integrity hashes |
| `README.md`, `LICENSE`, `NOTICE.md` | Usage instructions, MIT license, and source notices |

The snapshot contains English Markdown and structured YAML. Original manifests
retain source language metadata, but installed document availability is
`en-US` only. Selected document bodies are read on demand; catalog browsing
uses indexes. The package has no JavaScript API, executable install scripts,
runtime dependencies, or automatic downloads.

## Install and verify

The standalone PCR reader requires **Node.js 24.19 or later**, on Linux x64/ARM64, Windows x64, or
macOS ARM64. These examples target PCR 0.4.4; use registry commands only after
guarded publication makes that version available. Source metadata or a preparing
release does not establish public availability. In a project directory:

```sh
npm install @tiangong-lca/pcr@0.4.4 @tiangong-lca/pcr-library@0.4.4
./node_modules/.bin/tiangong-pcr library info --library ./node_modules/@tiangong-lca/pcr-library/library.sqlite --format json
./node_modules/.bin/tiangong-pcr library verify --library ./node_modules/@tiangong-lca/pcr-library/library.sqlite --format json
./node_modules/.bin/tiangong-pcr list --library ./node_modules/@tiangong-lca/pcr-library/library.sqlite --format json
```

On Windows, use `node_modules/.bin/tiangong-pcr.cmd`. Explicit `--library`
selection makes the chosen snapshot unambiguous. `PCR_LIBRARY` can also select
it; outside a PCR source checkout the CLI otherwise discovers the installed
content package.

## Move to an offline machine

Download the required versions on a connected machine:

```sh
npm pack @tiangong-lca/pcr@0.4.4
npm pack @tiangong-lca/pcr-library@0.4.4
```

Transfer both tarballs and a suitable Node.js runtime. Then install without
registry access:

```sh
npm install --offline --ignore-scripts --no-audit --no-fund ./tiangong-lca-pcr-0.4.4.tgz ./tiangong-lca-pcr-library-0.4.4.tgz
./node_modules/.bin/tiangong-pcr library verify --format json
```

You can also extract `library.sqlite` and `library.sqlite.json` and copy them
together to any directory. Keep the pair intact and select the database with
`--library /path/to/library.sqlite`. No source repository checkout is needed.

## Pinning and updates

Unified releases pair the same content and CLI product version; the bundled
`product-release.json` binds the source commit and complete source fingerprint.
Reader/content consumption follows declared format, projection and command
capabilities and the minimum reader version, rather than equal SemVers. The current
minimum remains 0.4.1; a capable older reader may consume newer content under that
contract and any audited legacy reader profile.
Historical snapshots retain their existing format-version compatibility. Keep old snapshots when reproducibility
matters, install a new version alongside them, verify it, and explicitly select
it for new work. Do not edit the database or its sidecar in place.

For latest-compatible published content at a new task's preparation boundary,
use released `@tiangong-lca/cli` 0.1.25 or later and explicitly select the installed
PCR reader. Use the qualified Node 24.19.0 runtime for preparation; Tiangong CLI
supports `>=24.19.0 <25`. The qualified minimum CLI is 0.1.25; confirm its public availability before
installation:

```sh
npm install @tiangong-lca/cli@0.1.25
./node_modules/.bin/tiangong-lca pcr snapshot ensure --task-dir <absolute-task-dir> --tool-root <absolute-installed-PCR-package> --json
./node_modules/.bin/tiangong-lca pcr snapshot status --task-dir <absolute-task-dir> --json
./node_modules/.bin/tiangong-lca pcr exec --task-dir <absolute-task-dir> -- list --format json
```

On Windows, use `node_modules/.bin/tiangong-lca.cmd` for this preparation CLI.

Require `task_usable: true` before consumption. Continue an existing task with its
same directory and retained reader/content pins, without latest discovery. A newer
website does not replace them. See the bundled consumer Skill for explicit-version,
local-source and offline preparation.

Record the content version, tool version, source commit, and snapshot SHA-256
from `library info` / `library verify`. Use
`--library-sha256 sha256:<digest>` with a hash obtained from trusted release
metadata to pin exact database bytes. Integrity checks do not establish trust
in an unknown publisher.

PCR lifecycle and readiness are preserved. Candidate methodology remains
review-required, legacy identifiers may redirect to coverage information, and
an unmapped classification does not imply an available PCR.

## Documentation and license

- [PCR documentation](https://pcr.tiangong.earth)
- [Source and issues](https://github.com/tiangong-lca/pcr)
- [Offline format and release contract](https://github.com/tiangong-lca/pcr/blob/main/docs/offline-distribution.md)

TianGong-authored content is licensed under the **MIT License**; see the included
`LICENSE`. Source citations and third-party notices remain applicable. This
license does not relicense external standards or publications referenced by the
methodology.
