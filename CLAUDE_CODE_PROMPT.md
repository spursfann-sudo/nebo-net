# Lease Guide Web App — Claude Code Plan Mode Prompt

> **Usage:** Paste this entire prompt into Claude Code with Plan Mode enabled. Claude Code will analyze the requirements, propose an architecture, and then build it out step-by-step upon your approval.

---

## Prompt

I need you to build a simple interactive lease guide web app. This is a real project for two parties (a landlord and a tenant) who are entering into a Modified NNN Lease for the first time. I am acting as the intermediary transaction coordinator. The goal is to make a dense commercial lease accessible and understandable through an interactive web experience — not to replace the lease document itself.

### Project Context

I have two JSX files in this repo that contain the full content and component structure for each party's guide. These are "starter" drafts — the content, tab structure, accordion sections, callout types, and data display patterns in them are the source of truth. Your job is to port this content into a proper Next.js application with shared components, a centralized config for deal terms, and a lightweight flag/notes backend.

**The two content source files are:**
- `Landlord_Lease_Guide.jsx` — 5 tabs: Overview, Money, Protections, Your Obligations, Timeline
- `Tenant_Lease_Guide.jsx` — 5 tabs: Overview, Your Costs, Your Rights, Your Obligations, Risks & Exits

### Tech Stack

- **Framework:** Next.js (App Router) with TypeScript
- **Styling:** Tailwind CSS
- **Backend (minimal):** Vercel KV (Redis) for persisting flags/notes — or suggest a simpler alternative if appropriate (e.g., a JSON file endpoint, SQLite via Turso, etc.). Keep it lightweight. No user auth.
- **Deployment:** Vercel
- **Repo:** Already initialized on GitHub

### Architecture Requirements

#### 1. Routing & Navigation

- **Landing page (`/`):** Clean, neutral landing with two clear entry points: "I am the Landlord" and "I am the Tenant." No login, no auth. Keep it simple and professional.
- **Guide pages (`/landlord` and `/tenant`):** Each renders its respective guide. Both are accessible to anyone — transparency between parties is intentional.
- A subtle way to navigate between guides (e.g., "View the Tenant's Guide" link in the landlord view, and vice versa) since both are accessible.
- **Admin/review page (`/review`):** A simple page where I (Canyon) can see all submitted flags and notes from both parties, organized by section. No auth required for now — security through obscurity is fine for this short-lived tool. This page should show: which party submitted it, which section/tab it's attached to, the note text, and a timestamp.

#### 2. Shared Component Library

Both JSX files use nearly identical UI components. Extract and unify these into a shared component library:

- **`Section`** — Collapsible accordion panel with icon, title, and expand/collapse animation
- **`Callout`** — Colored alert/info box with types: `info`, `success`, `warning`, `tip`, `action` (tenant file adds `action` type)
- **`Term`** — Key-value display row (label + value)
- **`PhaseCard`** — Color-coded phase indicator with title, subtitle, and description
- **`CostRow`** — Grid-based cost allocation display (tenant file only, used in the costs tab)
- **`ChevronDown`** — Animated expand/collapse icon

Each component should be styled with Tailwind, replacing the inline styles from the JSX source files. Maintain the same visual language — clean, readable, professional, not flashy.

#### 3. Color System & Theming

The two guides should feel like they belong to the same system but be visually distinct:

- **Landlord guide:** Indigo-anchored accent color (the source JSX uses `#6366f1` as the header accent)
- **Tenant guide:** Teal-anchored accent color (the source JSX uses `#0d9488` as the header accent)
- **Shared neutrals:** Slate gray scale for text and borders (already consistent across both files)
- **Callout colors:** Keep the existing semantic color mapping (blue=info, green=success, amber=warning, purple=tip, red=action)

Define these as Tailwind theme extensions or CSS custom properties so they can be adjusted easily.

#### 4. Centralized Deal Terms Config

Create a single config file (e.g., `lib/lease-config.ts`) where all placeholder values from the JSX files can be set in one place. The JSX source files use bracket placeholders like:

```
[AMOUNT]
[SECURITY_MULTIPLE]
[SECURITY_DELIVERY_DAYS]
[ESCALATION_PERCENT]
[OUTSIDE_DELIVERY_MONTHS]
[CONTROLLABLE_CAP_PERCENT]
[CAP]
[THRESHOLD]
```

The config file should export a typed object with all of these values. Components should pull from this config rather than having values hardcoded in the content. Use a simple interpolation approach — the content can reference config values where the brackets currently are.

For the initial build, populate the config with the placeholder strings themselves (e.g., `amount: "[TBD]"`) so the app renders correctly before I fill in real numbers.

#### 5. Flag/Notes Feature

Each collapsible `Section` component should have a small, unobtrusive "flag" or "question" icon/button. When clicked:

- A small inline form appears (within or adjacent to the section) with:
  - A text field for an optional note (placeholder: "What questions do you have about this section?")
  - A submit button
- The form auto-captures:
  - Which party's guide they're viewing (landlord or tenant)
  - The tab name and section title
  - Timestamp
- On submit: the flag/note is persisted to the backend and the user sees a brief confirmation (e.g., a checkmark or "Sent" indicator). No need for the user to see other people's flags.

**Backend for flags:** Use a simple Vercel KV store, a serverless API route, or any lightweight persistence layer. The data model is simple:

```typescript
interface Flag {
  id: string;
  party: "landlord" | "tenant";
  tab: string;
  section: string;
  note: string;
  createdAt: string; // ISO timestamp
}
```

#### 6. Mobile-First Responsive Design

- **Mobile-first is critical.** Both parties will likely view this on their phones.
- The tab navigation should be horizontally scrollable on mobile (the 5 tabs won't fit on small screens).
- Accordion sections should be touch-friendly with adequate tap targets.
- The flag/notes form should work well on mobile keyboards.
- Test the layout mentally at 375px (iPhone SE) and 390px (iPhone 14) breakpoints.

#### 7. Content Migration

Port all content from both JSX files faithfully. Do not summarize, rewrite, or omit any section content. The legal specificity matters. Key things to preserve:

- Every tab and every section within each tab
- All `Callout` blocks with their correct types
- All `Term` key-value pairs
- All `PhaseCard` content
- All `CostRow` items (tenant costs tab)
- The timeline visualization (landlord timeline tab) with colored dots and connecting lines
- All bullet lists and their content
- The "v1 vs v2" comparison blocks (tenant overview tab)

Replace bracket placeholders with references to the centralized config.

#### 8. Footer

Remove the "Compass Real Estate Holdings" branding. Replace with a neutral footer:

```
This guide is for informational purposes only and does not constitute legal advice.
Both parties should review the full lease with qualified legal counsel.
```

#### 9. What NOT to Build

- No authentication or user accounts
- No PDF export
- No dark mode
- No animations beyond the accordion expand/collapse
- No search functionality
- No print stylesheet
- No analytics
- No cookie banners

### File Structure Suggestion

```
├── app/
│   ├── layout.tsx
│   ├── page.tsx                    # Landing page with party selector
│   ├── landlord/
│   │   └── page.tsx                # Landlord guide
│   ├── tenant/
│   │   └── page.tsx                # Tenant guide
│   ├── review/
│   │   └── page.tsx                # Admin view of all flags/notes
│   └── api/
│       └── flags/
│           └── route.ts            # POST to create flag, GET to list all
├── components/
│   ├── ui/
│   │   ├── Section.tsx
│   │   ├── Callout.tsx
│   │   ├── Term.tsx
│   │   ├── PhaseCard.tsx
│   │   ├── CostRow.tsx
│   │   ├── ChevronDown.tsx
│   │   ├── TabNav.tsx              # Shared tab navigation
│   │   └── FlagForm.tsx            # Flag/note submission form
│   ├── landlord/
│   │   ├── OverviewTab.tsx
│   │   ├── MoneyTab.tsx
│   │   ├── ProtectionsTab.tsx
│   │   ├── ObligationsTab.tsx
│   │   └── TimelineTab.tsx
│   └── tenant/
│       ├── OverviewTab.tsx
│       ├── CostsTab.tsx
│       ├── RightsTab.tsx
│       ├── ObligationsTab.tsx
│       └── RisksTab.tsx
├── lib/
│   ├── lease-config.ts             # All deal term values
│   └── flags.ts                    # Flag persistence helpers
├── tailwind.config.ts
└── package.json
```

### Quality Bar

- The end result should feel like a well-designed informational tool — something a transaction coordinator would confidently send to both a landlord and a tenant who have never done this before.
- Typography and spacing should prioritize readability. These are long-form informational sections.
- The accordion interactions should feel responsive and smooth.
- The flag/notes feature should feel lightweight and non-intrusive — it's a "raise your hand" mechanism, not a comments section.

### How to Start

1. Initialize the Next.js project with TypeScript and Tailwind
2. Build the shared component library first
3. Create the lease config file with placeholder values
4. Build the landing page
5. Build one guide page (landlord) end-to-end, fully porting all content
6. Build the second guide page (tenant), reusing shared components
7. Build the flag/notes API route and integrate the FlagForm component
8. Build the /review page
9. Final responsive pass and cleanup
