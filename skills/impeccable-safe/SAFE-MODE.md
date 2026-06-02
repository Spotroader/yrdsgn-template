# Impeccable Safe Mode — script replacements

This build ships **documentation only** (SKILL.md + `reference/`). No `scripts/`, no `agents/`, no localhost servers, no file injection.

When a reference file mentions `node .agents/skills/impeccable/scripts/...`, use the manual equivalent below instead.

## Setup replacements

| Full impeccable | Safe mode |
|-----------------|-----------|
| `context.mjs` | Read `PRODUCT.md` and `DESIGN.md` if they exist in the project root or `.impeccable/`. If missing, follow `reference/init.md` manually (write markdown by hand). |
| `context-signals.mjs` | Inspect git status, open HTML/CSS files, check for `DESIGN.md` / prior critique notes. Recommend 2–3 commands from context. |
| `palette.mjs` | Pick a brand seed from the brief or existing tokens; compose OKLCH palette in CSS variables manually. |
| `detect.mjs` | Grep/read target files for slop patterns listed in SKILL.md (gradient text, ghost cards, cream bg, etc.). Optional: user runs `npx impeccable detect` in their own terminal if they installed the npm CLI. |
| `pin.mjs` / `unpin.mjs` | Not supported. User can add a Cursor rule alias if desired. |

## Command-specific

| Command | Safe behavior |
|---------|---------------|
| `init` | Create `PRODUCT.md` / `DESIGN.md` by interviewing the user. **Skip** live config, CSP patch, and `detect-csp.mjs`. |
| `critique` | Run two-pass heuristic review from `reference/critique.md` **without** detect/live-server. Save snapshot to `.impeccable/critique/<slug>.md` manually. |
| `polish` | Read latest critique markdown if present; otherwise run `reference/audit.md` checklist on the target. |
| `audit` | Manual a11y/contrast/responsive review + browser snapshot if available. No bundled detector. |
| `live` | **Not available** in safe mode. Use normal edit → refresh workflow, or install full impeccable separately with explicit user consent. |

## Optional full tooling

If the user wants live browser iteration or automated detect:

```bash
npm install -g impeccable   # or npx impeccable
```

Run only in a trusted project directory. Full impeccable includes localhost servers and HTML injection — treat it like dev tooling, not a passive skill.
