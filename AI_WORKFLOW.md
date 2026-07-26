# Multi-AI Workflow

Git is the source of truth for completed work. This file defines handoff rules for any AI editing this repository.

## Start every task

Run `git status --short` and `git log -5 --oneline` before editing.

- Read `AGENTS.md` and inspect the current implementation.
- Preserve existing user changes. Never reset, checkout, stash, or discard them without approval.
- Check `SHOWCASE_LOCK.md` before changing app cards, categories, icons, descriptions, badges, or entry points.

## During the task

- Prefer the smallest existing pattern; keep translations in `src/data/translations.js` and showcase data in `src/data/apps.js`.
- For unfinished work, create or update `AI_HANDOFF.md` with the goal, changed files, next step, and checks. Remove it when complete.
- Do not treat `.antigravitycli/`, `.claude/`, or any tool-owned folder as shared project memory. These may be local, symlinked, stale, or absent on another machine.

## Before handoff

Run `npm run build`, `git diff --check`, and `git status --short`.

Make one focused commit, such as `fix(hero): ...` or `perf(site): ...`. Do not commit generated `dist/` files unless explicitly required.

## Push and deploy

- Push only when the user asks to submit, publish, or deploy.
- `main` is the production branch; its GitHub Actions workflow deploys to Cloudflare Pages.
- After pushing, use `gh run list` or `gh run watch` and report the deployment result.
- A local commit is not a deployment; always state which one happened.
