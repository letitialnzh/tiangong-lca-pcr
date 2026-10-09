# @tiangong-lca/pcr

Use TianGong LCA product category rules (PCRs) to guide LCA data creation,
optionally author TIDAS processes, and support Agent-led review of existing
TIDAS processes/models using a local content library. This package
contains the CLI, schemas, bundled runtime dependencies, and a consumer Agent
Skill. Install the content separately with
[`@tiangong-lca/pcr-library`](https://www.npmjs.com/package/@tiangong-lca/pcr-library).

## Install and run

Requires **Node.js 24.19 or later**. Supported platforms are Linux x64/ARM64,
Windows x64, and macOS ARM64.

These examples target PCR 0.4.5. Use the registry commands after guarded
publication makes that version available; source metadata and a preparing release
do not establish public availability.

In a project directory:

```sh
npm install @tiangong-lca/pcr@0.4.5 @tiangong-lca/pcr-library@0.4.5
./node_modules/.bin/tiangong-pcr library verify --format json
./node_modules/.bin/tiangong-pcr list --format json
```

On Windows, use `node_modules/.bin/tiangong-pcr.cmd`. When running outside a PCR
source checkout, the CLI discovers the installed content package. Use an
explicit path when selecting a different snapshot:

```sh
./node_modules/.bin/tiangong-pcr list --library ./node_modules/@tiangong-lca/pcr-library/library.sqlite --format json
```

The selection order is `--library`, then `PCR_LIBRARY`, then the installed
content package. `--root` explicitly selects a source checkout and cannot be
combined with `--library`.

## Latest compatible content for a new task

Released `@tiangong-lca/cli` 0.1.25 or later can manage content freshness separately
from this offline reader; 0.1.25 is the qualified minimum for this workflow.
Use Node 24.19.0 for this task workflow; Tiangong CLI supports `>=24.19.0 <25`,
separately from the standalone PCR reader requirement above. After confirming its
publication, install that qualified version:

```sh
npm install @tiangong-lca/cli@0.1.25
```

Select this installed PCR package's absolute root once when preparing a dedicated
task directory:

```sh
./node_modules/.bin/tiangong-lca pcr snapshot ensure --task-dir <absolute-task-dir> --tool-root <absolute-installed-PCR-package> --json
./node_modules/.bin/tiangong-lca pcr snapshot status --task-dir <absolute-task-dir> --json
./node_modules/.bin/tiangong-lca pcr exec --task-dir <absolute-task-dir> -- list --format json
```

On Windows, use `node_modules/.bin/tiangong-lca.cmd` for this preparation CLI.

Require `task_usable: true`. A new connected task selects the latest compatible
published content, while an existing task retains its version/hash without
network discovery. Explicit-version and offline modes remain available through
command help. The wrapper injects the selected library/hash; do not pass native
source overrides. It keeps the selected installed reader bytes fixed as well.
This is an explicit workflow preparation boundary, not a hook into every chat or
Foundry task. Standalone commands below preserve their existing behavior.
Content compatibility is independent of its product version: a capable reader
0.4.1 can consume newer content when its declared compatibility and any audited
legacy reader profile permit it. Keep that reader and an existing task's content
pin; a new website or release does not upgrade either implicitly.

## Common commands

```sh
./node_modules/.bin/tiangong-pcr tree --format markdown
./node_modules/.bin/tiangong-pcr list --scope material --page 1 --page-size 10 --format json
./node_modules/.bin/tiangong-pcr coverage summary --classification cpc:3.0 --format json
./node_modules/.bin/tiangong-pcr resolve --classification cpc:3.0:01111 --format json
./node_modules/.bin/tiangong-pcr guidance --pcr <pcr-id> --format json
./node_modules/.bin/tiangong-pcr guidance --pcr <pcr-id> --topic boundary --format json
./node_modules/.bin/tiangong-pcr inspect --input process.json --related ./datasets --section exchanges --format json
./node_modules/.bin/tiangong-pcr review prepare --pcr <pcr-id> --input process.json --related ./datasets --output review.json --format json
./node_modules/.bin/tiangong-pcr review check --pcr <pcr-id> --input process.json --related ./datasets --report review.json --format json
./node_modules/.bin/tiangong-pcr --help
```

Use a PCR identifier returned by `list` for `<pcr-id>`. Each command has its own
`--help`. Default browsing shows material PCRs; `--scope legacy` exposes
compatibility records. Guidance reports readiness and validation coverage:
candidate content still requires review, and installing a package does not
approve a methodology. The content package provides English documents only.

Selected guidance returns verified source hashes, applicability and JSON Pointers;
follow pagination or read complete values with `--pointer`. `inspect` reads native
TIDAS JSON and explicitly supplied local references without fetching URIs or
asserting schema validity. `calculate` performs normalization, conversion or
balance arithmetic with explicit quantities, bases and evidence; see its help.

The Agent fills the draft review after investigating the data. Findings distinguish
confirmed issues, suspected anomalies and evidence gaps, with input/PCR evidence
and unreviewed scope. `review check` validates the envelope and references;
`methodology_approval` remains false. A valid report does not certify its reasoning.
Use the separately provisioned TIDAS toolkit/SDK for format validation. A foreground
package is optional; legacy `validate-model` only checks qualifier text and
`validate-dataset` only checks collection protocol IDs.

## Fully offline installation

On a connected machine, download both packages:

```sh
npm pack @tiangong-lca/pcr@0.4.5
npm pack @tiangong-lca/pcr-library@0.4.5
```

Transfer the two tarballs and a suitable Node.js runtime to the offline machine.
In the destination directory:

```sh
npm install --offline --ignore-scripts --no-audit --no-fund ./tiangong-lca-pcr-0.4.5.tgz ./tiangong-lca-pcr-library-0.4.5.tgz
./node_modules/.bin/tiangong-pcr library verify --format json
```

Runtime dependencies are bundled. No install scripts, runtime downloads, or
network connection are required. Unified releases pair the same tool/content product version;
record the bundled `product-release.json` identity and the snapshot hash for reproducible work. Use
`--library-sha256 sha256:<digest>` to require a specific trusted snapshot hash.
The CLI does not include an LLM. Fully offline semantic review requires an
offline-capable Agent/model supplied by the caller.

## Agent Skill

The package includes `skills/tiangong-pcr/SKILL.md` and its reference files. Copy
the complete `node_modules/@tiangong-lca/pcr/skills/tiangong-pcr/` directory into your
agent host's configured Skill directory, and make the installed CLI available
to that host. npm installation does not automatically activate the Skill.

## Documentation and license

- [PCR documentation](https://pcr.tiangong.earth)
- [Source and issues](https://github.com/tiangong-lca/pcr)
- [Offline format and release contract](https://github.com/tiangong-lca/pcr/blob/main/docs/offline-distribution.md)

Licensed under the **MIT License**; see the included `LICENSE`. Bundled
dependencies retain their own license files and notices in `node_modules`.

## Several PCRs in one read

Save `{ "schema_version": 1, "pcr_ids": ["<pcr-id>"] }` to a request file, then run `tiangong-pcr guidance batch --input request.json --library <library.sqlite> --output <new-file> --format json`. One to 100 IDs share one verified source session. Order and duplicates are preserved; any failed item fails the entire batch without creating a partial file. Topic/pointer selection retains complete source context. The output records source identity, input hash and actual read/cache statistics.
