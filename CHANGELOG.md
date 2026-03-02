# Changelog

All notable changes to this project will be documented in this file.

## 2026-03-02 - Initial Agent Spend Release

### Added
- Standalone `agent-spend` branding and project metadata.
- Codex ingestion from `~/.codex/sessions/**/*.jsonl`.
- Provider-aware API aggregation (`providerBreakdown`).
- Provider-aware dashboard controls and filtering.
- `insightsByProvider` API payload with Codex insight generation.
- Upstream traceability doc: `UPSTREAM.md`.

### Changed
- Reworked parser flow to combine Claude + Codex data.
- Updated README and landing docs for standalone publication.

### Removed
- Gemini ingestion and UI references.
