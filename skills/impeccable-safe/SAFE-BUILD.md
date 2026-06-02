# Impeccable Safe Build

## Why this exists

The upstream [impeccable](https://github.com/impeccable-dev/impeccable) skill bundles ~50 Node scripts (live preview server, HTML injection, git spawns, copy-edit agents). Automated security scanners flag many patterns as CRITICAL — often false positives (`.exec()` regex vs shell `exec`), but **live mode is genuinely powerful** (writes files, serves localhost, injects scripts).

**impeccable-safe** keeps the design intelligence (SKILL.md + 27 reference playbooks) and drops all executable code.

## Contents

| Included | Excluded |
|----------|----------|
| `SKILL.md` — design rules, command routing (safe) | `scripts/` |
| `reference/*.md` — craft, audit, polish, brand, … | `agents/` |
| `SAFE-MODE.md` — manual substitutes for scripts | `live` command at runtime |

## Security

- No subprocess, no network, no filesystem writes beyond what the agent already does when editing the project.
- Expected auditor result: **PASS** (docs-only).

## Install (Cursor)

Copy or symlink into your skills folder:

```bash
cp -R skills/impeccable-safe ~/.cursor/skills/impeccable-safe
```

Invoke as `@impeccable-safe` or add a rule: "For UI design tasks, follow impeccable-safe."

## YuruDesign template

This repo uses **impeccable-safe** for GSAP/e-commerce polish. Design tokens live in `impeccable.css`; catalog in `data.js`.
