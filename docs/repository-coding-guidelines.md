---
title: PCR Repository Coding Guidelines
docType: guide
scope: repo
status: draft
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when changing builder code, public CLI code, shared core modules, or Agent-facing command behavior
  - when applying coding principles to repository-specific implementation choices
whenToUpdate:
  - when coding boundaries between builder, core, and public CLI change
  - when repository-specific coding guidelines change
checkPaths:
  - docs/repository-coding-guidelines.md
lastReviewedAt: 2026-10-08
lastReviewedCommit: 42a1e3f1a1d6c242066567b4337eddcfa77f8e18
lastReviewedNote: "Reviewed PCR #104 bilingual getting-started sources, localized copy feedback and verified counterpart switching, plus one sidebar entry per main section. Preserve #103 reading-language preferences, source fidelity, English-only npm methodology and separate qualified publication; canonical methodology and CLI behavior remain unchanged."
related:
  - docs/coding-principles.md
  - docs/ai-friendly-cli-design.md
---

# Repository Coding Guidelines

This document applies the general principles in `docs/coding-principles.md` to this PCR repository.

These guidelines may change when the repository structure, CLI surface, or builder workflow changes. Keep general coding quality principles in `docs/coding-principles.md`.

## 1. Keep Builder and Public CLI Separate

Separate tools that author PCR truth from tools that consume PCR truth.

`builder/` changes the library: scaffolding, linting, projection, versioning, and publication. Public CLI code reads the library and turns existing PCR records into guidance, validation output, and feedback drafts. Shared deterministic read/projection behavior belongs in `packages/pcr-core/`, not in either CLI surface.

Do not let a maintenance tool become a runtime dependency. Do not let a consumption command silently mutate methodology files.

## 2. Keep Command Boundaries Thin

Command files should parse input, call named operations, format output, and return the right exit status.

They should not become the home for parsing algorithms, projection logic, schema rules, template rendering, or repository traversal. When a command starts carrying durable behavior, move that behavior behind a named module with explicit inputs and outputs.

## 3. Make Side Effects Explicit and Localized

Reads, writes, timestamps, filesystem mutations, network access, and publication actions should be easy to identify from the call site.

A function that mutates files should say so through its name, command, or return value. Read-only commands must not write. Mutating commands should make the target path, changed files, and lifecycle effect clear to the caller.

## 4. Separate Parse, Validate, Transform, and Render

Data processing code should make each stage explicit.

Use a clear flow: read input, parse it into structured data, validate the structured data, transform it into the target shape, render it, then write it. Do not hide validation inside rendering, mutate files while parsing, or repair malformed input during transformation without reporting it.

## 5. Make Mutations Auditable

Mutation commands should make their effects clear.

Commands that write, publish, bump, scaffold, sync, or rewrite files should report the target object and changed files. For broad or risky mutations, prefer an inspectable plan, dry-run mode, or structured summary before or alongside the write path.

## 6. AI-Friendly CLI Design

Design CLI output as context for an Agent, not just text for a terminal.

The repository-level rule is simple: an Agent-facing CLI should be discoverable, bounded, deterministic, and useful in the next reasoning step. The detailed design contract lives in `docs/ai-friendly-cli-design.md`.

## 7. TypeScript source and test engineering

Follow [TypeScript and test engineering](typescript-engineering.md) for exact Node
pins, strict TypeScript projects, the legacy migration inventory, complete test
suites and source-mapped coverage. New implementation and tests use TS/TSX; the
approved upstream Python SEO snapshot remains unchanged. Run the complete
validation entrypoint after installing both current dependency graphs. Each phase
must distinguish native source tests, emitted code tests and installed-artifact
qualification. Do not weaken production filesystem guards to accommodate test
fixture aliases, or copy known semantic losses into expected output.

Test fixtures should exercise production builders and integrity boundaries with
bounded representative data. Keep independent full-corpus reproducibility in its
own mandatory qualification test. `test:offline:portable` is the compact portable
selection; complete `all`/`root` selections still include corpus qualification.
Follow [CI qualification lanes](typescript-engineering.md#ci-qualification-lanes)
for complete shard membership, fresh invocation-bound receipts and raw coverage.
Do not infer test completeness from threshold success or a requested V8 flag,
reuse old evidence for the data lane, or broaden its allowlist by path similarity.
