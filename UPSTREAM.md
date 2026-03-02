# Upstream Reference

## Upstream Project

- Name: `claude-spend`
- Repository: https://github.com/writetoaniketparihar-collab/claude-spend
- Original creator: Aniket Parihar

## This Repository

- Name: `agent-spend`
- Type: standalone repository (not a GitHub fork relationship)
- Intent: preserve upstream attribution while evolving independently

## Major Differences From Upstream

1. Added Codex support:
- Reads local Codex sessions from `~/.codex/sessions/**/*.jsonl`
- Aggregates tokens per session/day/model/provider

2. Provider-aware dashboard:
- Provider tabs and provider breakdown cards
- Unified view + per-provider filtering

3. Insights:
- Existing Claude-focused insights retained
- Added Codex-specific token-based insights

4. Gemini:
- Removed from this version due low-value local activity logs for token analytics

5. Branding:
- Renamed project and docs to `Agent Spend`

## Tracking Upstream

When syncing with upstream:
1. Pull upstream changes into a temporary branch.
2. Reconcile parser/frontend differences.
3. Update this file with date + summary of merged upstream changes.
