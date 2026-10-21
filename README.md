# GCC Atlas — assignment prototype

**GCC Atlas** is a decision-intelligence concept for India's Global Capability Centre (GCC) ecosystem. It is not positioned as another static directory. The core product thesis is an evidence graph that connects public signals, GCC/company/site entities, city and policy context, and provider capabilities—while displaying provenance and uncertainty at the point of use.

## Run it

### Fastest path (no install, no API key)

Open `gcc_atlas_prototype.html` in any modern browser. The interface works offline with its curated public-source sample data. Filtering, signal details, city comparison, provider search, CSV export and local AI brief generation are functional.

### Optional local server and live AI brief

1. Ensure Python 3.9+ is installed.
2. From this folder run `python server.py`.
3. Open `http://localhost:8000/gcc_atlas_prototype.html`.
4. For a live model-backed synthesis, set your own API key before starting the server:
   - macOS/Linux: `export OPENAI_API_KEY="..." && python server.py`
   - Windows PowerShell: `$env:OPENAI_API_KEY="..."; python server.py`
   - Optional: set `OPENAI_MODEL` to a model available to your account, or `OPENAI_API_URL` for a compatible Responses API endpoint.

No API key is included. If no key is configured or the API is unavailable, the UI falls back to its local rule-based, source-linked demo response. Do not enter confidential information into the demo.

## What's functional

- Overview dashboard with FY2026 market baseline and sample signals.
- Search/filter on signals by company, city, sector, type and evidence strength.
- Click-through signal dossiers with date, reported scale, source link, confidence rationale and explicit caveats.
- City cards and side-by-side city comparison; unsupported cost and salary metrics are intentionally not fabricated.
- Provider landscape grouped by published capability, with outcomes explicitly marked as not independently verified.
- AI copilot: deterministic local research briefs in standalone mode; optional server endpoint calls a model using supplied data and source-register context.
- CSV export of current sample signal data.
- Editable manual-research cost calculator that shows the annual labour-cost scenario from explicit assumptions (not an industry average or savings promise).
- Source register / data governance notes.

## Data and prototype limits

- This is a curated demonstration, not a comprehensive GCC census or automated crawler.
- Public source excerpts are paraphrased. Announced headcount, floor area and planned expansions are not treated as realised outcomes.
- The displayed confidence score is a prototype heuristic to demonstrate provenance-first UX; it is not a calibrated statistical probability.
- Provider capability statements are derived from public product/company pages. The prototype does not score service quality or client outcomes.
- A production build needs scheduled source ingestion, entity resolution, duplicate detection, human review, update/change history, robust citations and a correction process.

See `Submission_Guide.md` for the full strategy rationale, 3–4 minute product demo path, 5-minute talk track, discovery questions, pilot metrics and submission checklist.

## Recommended first customer

GCC-facing service providers (commercial real estate, talent, payroll, tax/compliance and GCC setup operators) who need recurring account prioritisation. Initial workflow: detect a new or expanding centre → inspect the evidence → understand likely needs → create a qualified outreach brief. GCC market-entry advisers should act as design partners for the later city/policy diligence layer.

## Product guardrails

1. Every material claim should expose source, published date, retrieved date and a caveat.
2. Store parent company, Indian entity, centre/unit, physical site and event as separate entity types.
3. Keep announcement states distinct: rumour, announced, planned, launched, operating, expanded, closed.
4. Provider paid placement must be visibly labelled and never influence independent ranking or evidence score.
5. Use AI to extract, deduplicate, classify, summarise and draft; use deterministic rules and human review for high-impact facts.
