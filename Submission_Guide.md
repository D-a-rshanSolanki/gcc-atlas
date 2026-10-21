# GCC Atlas — strategy, demo and submission guide

## 1. The argument in one sentence

**India's GCC ecosystem does not simply need another list of companies; it needs a source-linked evidence layer that connects company/site identity, what has changed, city and policy context, and the next decision.**

The platform should show the evidence behind a claim, its date and scope, and whether it is a plan, an announcement or a verified operating fact. That is the proposed trust advantage.

## 2. What the deck recommends

### Problem definition

Useful information exists, but it is fragmented by publisher, definition, update cadence and commercial incentive. A GCC company count, a centre/unit count, a physical office count and office-leasing volume are different measures. Sources need to retain those definitions rather than make conflicting estimates appear comparable.

The ecosystem actors affected include global companies entering India, existing GCC leaders, service providers selling to GCCs, state investment teams, and advisory / implementation partners. They currently combine referral networks, consultant reports, public announcements, government portals, real estate datasets, provider websites and spreadsheets.

### Initial customer

Start with **GCC-facing service-provider sales teams** in commercial real estate, recruitment/talent, payroll, tax/compliance and GCC setup / BOT. The job is recurring: identify new or expanding centres, understand why the event is relevant, qualify the evidence and prioritise outreach. This offers a more frequent initial workflow than a company making a one-off location decision.

Use market-entry advisers and a small number of GCC operators as design partners for the follow-on city and policy workbench.

This is a hypothesis to test—not a claim that willingness to pay is already proven.

### Product scope

1. **Signal feed:** announced new GCCs, expansions, launches and capability investments.
2. **Evidence dossier:** publisher, publication date, source URL, claim excerpt, reported scale, event status, confidence rationale and caveats.
3. **Entity graph:** separate records for parent company, Indian legal entity, GCC, unit/site and event.
4. **City / policy workbench:** compare city specialisation and official policy sources; avoid unsupported precision for salary, rental and incentive savings.
5. **Provider landscape:** show published capability evidence separately from independently verified outcomes; no pay-to-rank scores.
6. **AI research copilot:** generate draft briefs from supplied records, link back to evidence, and flag missing data.

### Positioning

The direct category is forming. Bamboo Reports, GCC Index and Sansovi GCC already have GCC intelligence products, and should be acknowledged—not ignored. The strategy is therefore to differentiate on **evidence lineage + decision workflow**, rather than “we have a directory and others do not”. Public claims about competitors in the deck are based on their own published product pages; they are not an independent feature audit.

## 3. How to demo the prototype (3–4 minutes)

1. **Overview:** point out that the company count and unit count are separate and dated. Show the source-backed market baseline.
2. **Signals & moves:** filter by sector, then click Protolabs. Call out the announced/planned status, 200–300 planned employee scale and the linked Invest Telangana source. Explain that it is not treated as actual hiring.
3. **Evidence panel:** highlight confidence as a prototype heuristic, not a statistical probability; the caveat is at the point of use.
4. **Where to build:** compare Hyderabad and Ahmedabad. Explain that this is a first-pass mandate conversation, not a city ranking. The product deliberately does not invent salary or office-cost values.
5. **Provider landscape:** show published capabilities, while noting the prototype does not score outcomes where independent proof is missing.
6. **AI research copilot:** choose a suggested prompt such as “Compare Bengaluru and Hyderabad for a healthcare GCC”. Point out citations and the explicit missing-data list. The standalone HTML runs in deterministic local-demo mode; the optional local server can use an API key for live model-backed synthesis.
7. **Research-cost calculator:** show the illustrative default scenario (3 people × 4 hours/week × ₹1,500 loaded hourly cost × 48 weeks = ₹8.64 lakh/year). Emphasise that this is an editable hypothesis to replace with interviews—not a claimed market average or expected savings.

## 4. A 5-minute talk track

**Opening (30 sec):** “The market is growing quickly, but the data does not have a common model. The latest Nasscom–Zinnov baseline reports 2,117 GCCs across 3,728 units; these are deliberately different levels of counting.”

**Problem (45 sec):** “A company entering India needs to join up signals, city advantages, policies, real estate, talent and providers. Today the evidence sits across reports, public pages and relationships. Users rebuild the same map, and plan-versus-actual gets mixed up.”

**Wedge (45 sec):** “I would start with GCC-facing service-provider sales teams because they repeat account-prioritisation every week. The first job is not to answer every question about GCCs; it is to show which centres changed, why a provider should care and how strong the evidence is.”

**Solution (75 sec):** “Atlas combines a signal feed, canonical entities, traceable evidence dossiers and a simple decision workbench. AI helps find, classify, deduplicate and synthesise information. It does not replace the source, and uncertain claims go to review.”

**Differentiation (45 sec):** “There are direct GCC intelligence competitors today. The product must beat generic directory workflows by making source history, event status, uncertainty, corrections and downstream actions first-class—and by preserving independent provider evaluation.”

**Validation plan (45 sec):** “In 30 days, interview five to ten provider teams and build 20 manually verified signal dossiers. In the next 30, ship saved searches and briefs. By day 90, test qualified meetings, research hours saved, correction rates and pilot conversion. Pricing and the pain model should follow observed value.”

**Close (15 sec):** “The first milestone is not the biggest database. It is a small, trusted dataset that changes a real user decision.”

## 5. Research and discovery questions

Ask a service-provider sales leader:

- How do you identify new GCCs, expansions and hiring / site signals today?
- Walk me through the last account you prioritised because something changed. What was the evidence?
- How much time does each person spend on research each week? Which activities are repetitive?
- How often is a prospect list stale or missing the real decision-maker / operating context?
- Which signal would actually change who you call this week—and which signal is just news?
- What needs to be true for you to pay for this rather than use your current reports, CRM or research process?

Ask a market-entry adviser or GCC leader:

- Which data do clients challenge most often: city fit, costs, incentives, talent or provider delivery claims?
- Which sources do you trust for each decision and where do they conflict?
- What is the minimum evidence required to shortlist or reject a city / provider?
- Which facts must have a timestamp and change log for you to use them in a board-level recommendation?

## 6. Metrics to use in a pilot

- **Evidence coverage:** share of material records with source URL, publication date, retrieval date and a claim excerpt.
- **Signal precision:** share of surfaced signals that a human reviewer confirms are correctly classified.
- **Freshness:** median delay from a public announcement to capture.
- **Entity quality:** duplicate / incorrect-merge rate across company, centre, unit and site records.
- **Workflow value:** research time saved, qualified meetings sourced from a signal and conversion compared with the current workflow.
- **Trust:** correction rate, time to resolve conflicts and percent of users who open evidence links before acting.

Set targets only after measuring the baseline. Do not present these as existing results.

## 7. Risks and safeguards

- **Inconsistent definitions:** use a data dictionary; retain both source claims with scope and period.
- **Planned activity misread as actual:** explicit event lifecycle and date-stamped transitions.
- **AI hallucination:** answer only from retrieved source context; cite every material claim and expose missing information.
- **Provider pay-to-play:** paid profiles may be labelled, but payments do not influence evidence confidence or ranking.
- **Cost / salary precision without sound data:** omit the figure until a definition, source and update cadence are available.
- **Competitor feature overlap:** win on verification, change history, joined data and measurable workflow outcomes, not on claiming a unique directory.

## 8. Submission checklist

- Open the PowerPoint and make sure it displays correctly on the target system.
- Open `gcc_atlas_prototype.html` in a modern browser. It works without installing dependencies or entering an API key.
- The optional `server.py` serves the app and enables model-backed brief synthesis if the operator supplies an OpenAI API key; no key is bundled.
- In the final email, include both the deck and the prototype bundle / HTML file. Give the reviewer the one-line demo instruction: “Open `gcc_atlas_prototype.html` in Chrome and click Signals & moves.”
- Be ready to explain which statements are sourced facts, which are hypotheses and what evidence you would collect next.
