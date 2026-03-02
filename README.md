# Agent Spend

Agent Spend is a local usage analytics dashboard for coding agents.
It currently supports:
- Claude (`~/.claude/projects`)
- Codex (`~/.codex/sessions`)

## Upstream Attribution

This project is based on the original [`claude-spend`](https://github.com/writetoaniketparihar-collab/claude-spend) by Aniket Parihar.

This standalone repo adds:
- Multi-provider parsing architecture
- Codex ingestion and token aggregation
- Provider-aware dashboard filtering
- Provider-specific insights (`Claude`, `Codex`)
- Rebrand to Agent Spend

For full lineage and diffs, see [UPSTREAM.md](./UPSTREAM.md).

## What's Changed From Upstream

1. Added Codex support in backend parser.
2. Removed Gemini ingestion (insufficient useful local token data).
3. Added provider breakdown API and provider-aware UI controls.
4. Added Codex insight generation (token-based rules).
5. Rebranded naming and docs to Agent Spend.

## Install

```bash
npm install
```

## Run

```bash
node src/index.js
```

Options:

```bash
node src/index.js --port 8080
node src/index.js --no-open
```

## Verify Locally

After launch:
- Dashboard: `http://localhost:3456`
- Data API: `http://localhost:3456/api/data`

Expected API shape includes:
- `sessions`
- `providerBreakdown`
- `insightsByProvider`

## Privacy

Agent Spend reads local log files and serves a localhost dashboard.
No telemetry or remote data upload is included.

## License

MIT. See [LICENSE](./LICENSE).

Created by Anshumani Ruddra.
