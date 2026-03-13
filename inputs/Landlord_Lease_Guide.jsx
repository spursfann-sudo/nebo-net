import { useState } from "react";

const ChevronDown = ({ open }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    style={{
      transform: open ? "rotate(180deg)" : "rotate(0deg)",
      transition: "transform 0.2s ease",
      flexShrink: 0,
    }}
  >
    <path
      d="M5 7.5L10 12.5L15 7.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Section = ({ title, icon, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div
      style={{
        border: "1px solid #e2e8f0",
        borderRadius: 10,
        marginBottom: 12,
        overflow: "hidden",
        background: "#fff",
        boxShadow: open ? "0 2px 8px rgba(0,0,0,0.06)" : "none",
        transition: "box-shadow 0.2s ease",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "14px 18px",
          border: "none",
          background: open ? "#f8fafc" : "#fff",
          cursor: "pointer",
          fontSize: 15,
          fontWeight: 600,
          color: "#1e293b",
          textAlign: "left",
        }}
      >
        <span style={{ fontSize: 20 }}>{icon}</span>
        <span style={{ flex: 1 }}>{title}</span>
        <ChevronDown open={open} />
      </button>
      {open && (
        <div style={{ padding: "4px 18px 18px", fontSize: 14, lineHeight: 1.65, color: "#334155" }}>
          {children}
        </div>
      )}
    </div>
  );
};

const Callout = ({ type = "info", children }) => {
  const styles = {
    info: { bg: "#eff6ff", border: "#bfdbfe", color: "#1e40af", label: "Key Point" },
    success: { bg: "#f0fdf4", border: "#bbf7d0", color: "#166534", label: "Your Protection" },
    warning: { bg: "#fffbeb", border: "#fde68a", color: "#92400e", label: "Action Required" },
    tip: { bg: "#faf5ff", border: "#e9d5ff", color: "#6b21a8", label: "Why This Matters" },
  };
  const s = styles[type];
  return (
    <div
      style={{
        background: s.bg,
        border: `1px solid ${s.border}`,
        borderRadius: 8,
        padding: "10px 14px",
        margin: "10px 0",
        fontSize: 13,
        color: s.color,
        lineHeight: 1.6,
      }}
    >
      <strong>{s.label}:</strong> {children}
    </div>
  );
};

const Term = ({ label, value }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "8px 0",
      borderBottom: "1px solid #f1f5f9",
      gap: 12,
    }}
  >
    <span style={{ color: "#64748b", fontSize: 13, flexShrink: 0 }}>{label}</span>
    <span style={{ fontWeight: 600, fontSize: 13, textAlign: "right" }}>{value}</span>
  </div>
);

const PhaseCard = ({ phase, title, duration, color, children }) => (
  <div
    style={{
      borderLeft: `4px solid ${color}`,
      background: "#f8fafc",
      borderRadius: "0 8px 8px 0",
      padding: "12px 16px",
      marginBottom: 10,
    }}
  >
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
      <span
        style={{
          background: color,
          color: "#fff",
          fontSize: 11,
          fontWeight: 700,
          padding: "2px 8px",
          borderRadius: 4,
        }}
      >
        {phase}
      </span>
      <span style={{ fontWeight: 600, fontSize: 14 }}>{title}</span>
    </div>
    <div style={{ fontSize: 12, color: "#64748b", marginBottom: 4 }}>{duration}</div>
    <div style={{ fontSize: 13, color: "#334155" }}>{children}</div>
  </div>
);

export default function LandlordLeaseGuide() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "money", label: "Money" },
    { id: "protection", label: "Protections" },
    { id: "obligations", label: "Your Obligations" },
    { id: "timeline", label: "Timeline" },
  ];

  return (
    <div
      style={{
        maxWidth: 720,
        margin: "0 auto",
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        color: "#1e293b",
        padding: "0 16px",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", padding: "28px 0 20px" }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: "#6366f1", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 6 }}>
          Landlord Reference Guide
        </div>
        <h1 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 6px", color: "#0f172a" }}>
          Modified NNN Lease Agreement
        </h1>
        <div style={{ fontSize: 14, color: "#64748b" }}>
          4000 Pulaski Pike NW, Huntsville, AL 35810
        </div>
        <div
          style={{
            display: "inline-block",
            marginTop: 10,
            padding: "4px 12px",
            background: "#fef3c7",
            borderRadius: 20,
            fontSize: 12,
            fontWeight: 600,
            color: "#92400e",
          }}
        >
          DRAFT — For Discussion Only
        </div>
      </div>

      {/* Tab Navigation */}
      <div
        style={{
          display: "flex",
          gap: 4,
          padding: 4,
          background: "#f1f5f9",
          borderRadius: 10,
          marginBottom: 20,
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              flex: 1,
              padding: "8px 4px",
              border: "none",
              borderRadius: 8,
              fontSize: 13,
              fontWeight: activeTab === tab.id ? 600 : 400,
              background: activeTab === tab.id ? "#fff" : "transparent",
              color: activeTab === tab.id ? "#1e293b" : "#64748b",
              cursor: "pointer",
              boxShadow: activeTab === tab.id ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
              transition: "all 0.15s ease",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* OVERVIEW TAB */}
      {activeTab === "overview" && (
        <div>
          <Section title="What Is This Lease?" icon="📋" defaultOpen={true}>
            <p style={{ margin: "0 0 10px" }}>
              This is a <strong>Modified Triple Net (NNN) Lease</strong> for your property at 4000 Pulaski Pike NW. The tenant pays base rent plus most operating costs — property taxes, insurance, and maintenance (including routine roof, structural, and HVAC servicing). You, as landlord, are responsible only for capital items costing $10,000 or more per occurrence and major system replacements at end of useful life.
            </p>
            <p style={{ margin: "0 0 10px" }}>
              The tenant is opening a <strong>behavioral health clinic for veterans</strong> (VA Community Care Network) with 6–9 therapists and 1–2 nurse practitioners providing outpatient mental health services.
            </p>
            <Callout type="tip">
              This lease passes routine maintenance through to the tenant (roof patching, structural upkeep, HVAC servicing) while keeping capital items above $10,000 on you. It also includes an explicit "Failure to Open" default trigger and broad draw rights on the security deposit.
            </Callout>
          </Section>

          <Section title="The Parties" icon="🤝">
            <Term label="Landlord" value="Bo Matthews Center of Excellence" />
            <Term label="Tenant" value="[To Be Determined]" />
            <Term label="Personal Guarantor" value="Kendall Newson" />
            <Term label="Property" value="4000 Pulaski Pike NW (~7,564 sq ft)" />
          </Section>

          <Section title="Why Is the Tenant Signing Before Renovations?" icon="🏗️">
            <p style={{ margin: "0 0 10px" }}>
              The tenant has agreed to sign before renovations begin to help you secure construction financing. A signed lease with a committed tenant is a key requirement most lenders need before approving a construction loan.
            </p>
            <Callout type="success">
              Your protections include: a Personal Guaranty from Kendall Newson (with survival clause for accrued obligations), a Letter of Credit or cash deposit, broadened draw rights covering carrying costs and re-tenanting expenses, and an explicit default trigger if the tenant fails to open for business within 90 days of delivery.
            </Callout>
          </Section>

          <Section title="Document Structure" icon="📄">
            <p style={{ margin: "0 0 10px" }}>
              The lease is organized into four parts to make it easier to navigate:
            </p>
            <div style={{ background: "#f8fafc", borderRadius: 8, padding: 14, marginBottom: 8 }}>
              <strong>Part I: Deal Terms</strong> — Parties, premises, term, rent, escalation, operating expenses, credit support. This is where all the business terms live.
            </div>
            <div style={{ background: "#f8fafc", borderRadius: 8, padding: 14, marginBottom: 8 }}>
              <strong>Part II: Delivery & Improvements</strong> — Scope of work, delivery conditions, early access, rent commencement phases, change orders.
            </div>
            <div style={{ background: "#f8fafc", borderRadius: 8, padding: 14, marginBottom: 8 }}>
              <strong>Part III: Occupancy & Operations</strong> — Maintenance, alterations, insurance, HIPAA, Assembly Room, parking. Day-to-day operations.
            </div>
            <div style={{ background: "#f8fafc", borderRadius: 8, padding: 14, marginBottom: 8 }}>
              <strong>Part IV: Legal Framework</strong> — Assignment, default/remedies, indemnity, SNDA, casualty, force majeure, notices, miscellaneous. Primarily for counsel.
            </div>
          </Section>

          <Section title="Assembly Room (Reserved-Use Rights)" icon="🏛️">
            <p style={{ margin: "0 0 10px" }}>
              You retain the right to use the Assembly Room for community events, nonprofit programming, and similar activities. Events must be scheduled with 48 hours' written notice (email is sufficient) and cannot occur during clinic hours without tenant consent.
            </p>
            <p style={{ margin: "0 0 10px" }}>
              You bear 100% of event costs, must carry event liability insurance naming the tenant as additional insured, and must restore the Assembly Room to pre-event condition within 24 hours. Event attendees cannot access clinical areas.
            </p>
            <Callout type="info">
              You reimburse the tenant for incremental utility costs from events within 30 days of their invoice. Prohibited activities include alcohol, controlled substances, and anything generating excessive noise or safety hazards.
            </Callout>
          </Section>
        </div>
      )}

      {/* MONEY TAB */}
      {activeTab === "money" && (
        <div>
          <Section title="How Rent Works (Three Phases)" icon="💰" defaultOpen={true}>
            <p style={{ margin: "0 0 12px" }}>
              Rent phases in over time to account for renovation and tenant setup:
            </p>

            <PhaseCard phase="PHASE 1" title="Construction Period" duration="Effective Date through Delivery Date" color="#ef4444">
              <strong>You receive: Nothing.</strong> Both base rent and NNN expenses are fully waived while you renovate. The tenant does have non-exclusive early access rights near the end of this period (Article 8) for setup activities, but early access does not trigger rent.
            </PhaseCard>

            <PhaseCard phase="PHASE 2" title="NNN-Only Transition" duration="Delivery Date through opening or 90 days (whichever is first)" color="#f59e0b">
              <strong>You receive: NNN expenses only</strong> (taxes, insurance, routine maintenance). No base rent. This 90-day window lets the tenant complete fit-out, obtain licenses, credential with the VA, and prepare to see patients.
            </PhaseCard>

            <PhaseCard phase="PHASE 3" title="Full Rent" duration="Tenant opens or 90 days post-delivery (the Outside Opening Date)" color="#22c55e">
              <strong>You receive: Base Rent + NNN expenses.</strong> Full payments begin. If the tenant hasn't opened by the Outside Opening Date, rent starts automatically AND the tenant is in default under Section 18.1(f).
            </PhaseCard>

            <Callout type="success">
              The "Failure to Open" default is your strongest protection. If the tenant hasn't opened by the 90-day mark, you can: terminate on 10 days' notice, draw on the Security for carrying and re-tenanting costs, and recover damages including unamortized Landlord Improvement costs.
            </Callout>
          </Section>

          <Section title="Base Rent" icon="🏠">
            <Term label="Amount" value="$[AMOUNT] per sq ft per year" />
            <Term label="Monthly Payment" value="$[AMOUNT] / month" />
            <Term label="Starts" value="Phase 3 (opening or Outside Opening Date)" />
            <Term label="Payment" value="1st of each month, in advance" />
            <Term label="Anti-Setoff" value="No offset, setoff, counterclaim, or deduction (except cure-and-offset right)" />
          </Section>

          <Section title="Rent Increases Over Time" icon="📈">
            <div style={{ background: "#f8fafc", borderRadius: 8, padding: 14, marginBottom: 10 }}>
              <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 6 }}>During Each Term: Annual Escalation</div>
              <p style={{ margin: 0, fontSize: 13 }}>
                Every year on the Commencement Date anniversary, rent increases by [ESCALATION_PERCENT]%. You can waive this increase in any given year without losing the right to apply it later. If you waive, the next year's escalation is calculated on the rent as last increased (no compounding through waived years).
              </p>
            </div>
            <div style={{ background: "#f8fafc", borderRadius: 8, padding: 14, marginBottom: 10 }}>
              <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 6 }}>At Each Renewal: Fair Market Value Reset</div>
              <p style={{ margin: 0, fontSize: 13 }}>
                When the lease auto-renews every 3 years, you set the base rent to Fair Market Value in your reasonable discretion, subject to a 1% floor and 4% cap over the outgoing rate. You deliver your proposed rent 120 days before the renewal starts. If the tenant disputes it, they can invoke three-appraiser arbitration — but the tenant bears the full cost of all three appraisers.
              </p>
            </div>
            <Callout type="tip">
              This is a significant advantage for you. You set the FMV rate in your reasonable discretion, and the tenant bears all arbitration costs if they want to challenge it. The 1%–4% band still applies either way.
            </Callout>
          </Section>

          <Section title="What the Tenant Pays Beyond Base Rent (NNN)" icon="📊">
            <p style={{ margin: "0 0 10px" }}>
              The tenant reimburses you 100% for operating costs. Here's what's included:
            </p>
            <Term label="Property Taxes" value="100% Tenant" />
            <Term label="Building Insurance" value="100% Tenant" />
            <Term label="Routine Roof Maintenance" value="100% Tenant (patching, gutters, flashing, minor membrane repair < $10K)" />
            <Term label="Routine Structural Maintenance" value="100% Tenant (tuckpointing, caulking, crack repair < $10K)" />
            <Term label="Routine HVAC Maintenance" value="100% Tenant (filters, coils, refrigerant, belts, PM contracts < $10K)" />
            <Term label="Landscaping, Pest Control, Trash" value="100% Tenant" />
            <Term label="Parking Lot Patching & Striping" value="100% Tenant" />
            <Term label="Fire/Life-Safety Inspections" value="100% Tenant" />
            <Term label="Management/Admin Fee" value="100% Tenant (capped at [CAP]% or $[AMOUNT], whichever is less)" />
            <Term label="Utilities" value="100% Tenant (direct contracts)" />
            <div style={{ height: 8 }} />
            <Callout type="info">
              Controllable Operating Costs (everything except taxes, insurance, utilities, snow removal, and government-imposed costs) are capped at [CONTROLLABLE_CAP_PERCENT]% year-over-year increase. The tenant pays estimated monthly amounts and you reconcile actual costs within 90 days of year-end. The tenant has audit rights — if they find you overstated by more than 3%, you pay for the audit.
            </Callout>
          </Section>

          <Section title="Security Deposit / Letter of Credit" icon="🔒">
            <Term label="Amount" value="[SECURITY_MULTIPLE] months Base Rent + NNN" />
            <Term label="Form" value="Cash deposit or irrevocable standby LOC (Exhibit I)" />
            <Term label="When Due" value="Within [SECURITY_DELIVERY_DAYS] days of signing" />
            <Term label="Replenishment" value="15 business days after draw" />
            <Term label="Return" value="30 days after lease expiration + premises surrender" />
            <p style={{ marginTop: 10, fontSize: 13 }}>
              <strong>Broad draw rights:</strong> You can draw for monetary defaults, non-monetary defaults, carrying costs during vacancy (taxes, insurance, utilities, maintenance), re-tenanting costs (brokerage, TI concessions, free rent, legal, marketing), enforcement costs, and failure-to-open costs. Failure to replenish after a draw is itself a monetary default.
            </p>
          </Section>
        </div>
      )}

      {/* PROTECTIONS TAB */}
      {activeTab === "protection" && (
        <div>
          <Section title="Personal Guaranty (Kendall Newson)" icon="🛡️" defaultOpen={true}>
            <p style={{ margin: "0 0 10px" }}>
              Kendall Newson personally guarantees all tenant obligations. If the tenant entity can't or won't pay, you can pursue Kendall Newson personally — directly, without suing the tenant entity first.
            </p>
            <p style={{ margin: "0 0 10px" }}>
              <strong>What it covers:</strong>
            </p>
            <ul style={{ margin: "0 0 10px", paddingLeft: 20, fontSize: 13 }}>
              <li style={{ marginBottom: 4 }}>All monetary obligations during the guaranty period</li>
              <li style={{ marginBottom: 4 }}>Tenant refuses to move in after renovations (failure to open)</li>
              <li style={{ marginBottom: 4 }}>Early termination or default damages</li>
              <li style={{ marginBottom: 4 }}>Enforcement costs including attorneys' fees</li>
            </ul>

            <div style={{ background: "#fefce8", borderRadius: 8, padding: 14, marginTop: 12, border: "1px solid #fde68a" }}>
              <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 6, color: "#854d0e" }}>
                Burn-Off: When the Guaranty Expires
              </div>
              <p style={{ margin: 0, fontSize: 13, color: "#713f12" }}>
                The guaranty terminates after the tenant makes <strong>36 consecutive months</strong> of on-time payments (received by the 5th of the month) starting from Phase 3 commencement. One late payment resets the clock to zero.
              </p>
            </div>

            <div style={{ background: "#eff6ff", borderRadius: 8, padding: 14, marginTop: 10, border: "1px solid #bfdbfe" }}>
              <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 6, color: "#1e40af" }}>
                Survival Clause
              </div>
              <p style={{ margin: 0, fontSize: 13, color: "#1e40af" }}>
                Even after the guaranty burns off, it <strong>survives for all obligations that accrued before the burn-off date</strong> — unpaid rent, outstanding reconciliation amounts, and unreimbursed costs. This means if the tenant owes money from the guaranty period that hasn't been collected yet, Kendall Newson remains on the hook for those specific amounts regardless of when you pursue them.
              </p>
            </div>
          </Section>

          <Section title="Failure to Open Default" icon="🚪">
            <p style={{ margin: "0 0 10px" }}>
              If the tenant hasn't opened for business by the Outside Opening Date (90 days after delivery), hasn't been diligently preparing, or refuses to accept possession, the tenant is in default. Your remedies include:
            </p>
            <ul style={{ margin: "0 0 10px", paddingLeft: 20, fontSize: 13 }}>
              <li style={{ marginBottom: 4 }}>Terminate the lease on 10 days' written notice</li>
              <li style={{ marginBottom: 4 }}>Draw on the Security for carrying costs and re-tenanting costs</li>
              <li style={{ marginBottom: 4 }}>Recover damages including brokerage commissions and unamortized Landlord Improvement costs</li>
              <li style={{ marginBottom: 4 }}>Pursue the personal guarantor directly</li>
            </ul>
            <Callout type="success">
              This gives you an explicit termination right and expanded damage recovery if the tenant fails to open, beyond the automatic rent trigger at the Outside Opening Date.
            </Callout>
          </Section>

          <Section title="What If the Tenant Defaults?" icon="⚠️">
            <div style={{ background: "#f8fafc", borderRadius: 8, padding: 14, marginBottom: 8 }}>
              <strong>Missed Rent:</strong> Written notice, 5 business days to cure. If not cured: terminate, re-enter, draw on Security, accelerate rent, pursue guarantor, sue for damages. Remedies are cumulative.
            </div>
            <div style={{ background: "#f8fafc", borderRadius: 8, padding: 14, marginBottom: 8 }}>
              <strong>Failed to Maintain Security:</strong> 15 business days to replenish after notice. Failure is a monetary default.
            </div>
            <div style={{ background: "#f8fafc", borderRadius: 8, padding: 14, marginBottom: 8 }}>
              <strong>Other Breaches:</strong> 30-day cure period (or 90 days if diligently prosecuting). Examples: HVAC contract lapse, unauthorized alterations, use violations.
            </div>
            <div style={{ background: "#f8fafc", borderRadius: 8, padding: 14, marginBottom: 8 }}>
              <strong>Abandonment:</strong> 30+ consecutive days without your consent.
            </div>
            <div style={{ background: "#f8fafc", borderRadius: 8, padding: 14, marginBottom: 8 }}>
              <strong>Bankruptcy:</strong> Filing not dismissed within 60 days.
            </div>
            <div style={{ background: "#f8fafc", borderRadius: 8, padding: 14, marginBottom: 8 }}>
              <strong>Failure to Open:</strong> Not open by Outside Opening Date (90 days post-delivery). Termination on 10 days' notice.
            </div>
          </Section>

          <Section title="SNDA (Protecting Your Financing)" icon="🏦">
            <p style={{ margin: "0 0 10px" }}>
              Your lender will need the lease subordinate to the mortgage. The SNDA protects both sides:
            </p>
            <ul style={{ margin: "0 0 10px", paddingLeft: 20, fontSize: 13 }}>
              <li style={{ marginBottom: 4 }}><strong>Subordination:</strong> Lease ranks below the mortgage (your lender requires this)</li>
              <li style={{ marginBottom: 4 }}><strong>Non-Disturbance:</strong> If you default on the loan, the tenant's lease survives foreclosure</li>
              <li style={{ marginBottom: 4 }}><strong>Attornment:</strong> Tenant agrees to pay rent to the new owner after foreclosure</li>
            </ul>
            <Callout type="warning">
              You must use commercially reasonable efforts to obtain an SNDA from your lender within 30 days of closing financing. If you fail to deliver within 60 days of tenant's request, the lease becomes superior to the lien until delivered. Estoppel certificates from the tenant are available within 10 business days of your request.
            </Callout>
          </Section>

          <Section title="Memorandum of Lease" icon="📝">
            <p style={{ margin: "0 0 10px" }}>
              Either party can record a short-form memorandum of the lease in the Madison County real property records. The memorandum identifies the parties, premises, and term (including renewal rights) but omits financial terms. Both parties must cooperate within 15 business days.
            </p>
            <Callout type="info">
              This is useful for your financing — a recorded memorandum gives constructive notice to future buyers and lenders that the tenant's lease exists, which supports the value of the property.
            </Callout>
          </Section>

          <Section title="Insurance the Tenant Must Carry" icon="📑">
            <Term label="General Liability" value="$1M / $2M aggregate" />
            <Term label="Professional Liability" value="$1M per claim / $3M aggregate" />
            <Term label="Umbrella/Excess" value="$2M per occurrence and aggregate" />
            <Term label="Workers' Comp" value="Statutory ($500K employer's liability)" />
            <Term label="Business Property" value="Replacement cost, all-risk" />
            <Term label="Business Interruption" value="12 months projected revenue" />
            <Term label="Cyber Liability" value="$1M (HIPAA/patient data)" />
            <Term label="Commercial Auto" value="$1M CSL" />
            <p style={{ marginTop: 10, fontSize: 13 }}>
              You are named as additional insured on all liability policies. Coverage is primary and non-contributory — the tenant's insurance pays first. Carrier must be A-VII+ rated with 30 days' cancellation notice. All policies include waiver of subrogation in your favor.
            </p>
          </Section>

          <Section title="Holdover" icon="⏰">
            <Term label="Holdover Rent" value="150% of final Base Rent + Additional Rent" />
            <Term label="Termination" value="30 days' written notice" />
            <p style={{ marginTop: 10, fontSize: 13 }}>
              Holdover creates a month-to-month tenancy at 150% of base rent. The tenant indemnifies you for all holdover damages, including claims from succeeding tenants. Holdover is not an extension or renewal.
            </p>
          </Section>
        </div>
      )}

      {/* OBLIGATIONS TAB */}
      {activeTab === "obligations" && (
        <div>
          <Section title="What You're Responsible For (Capital Items)" icon="🔧" defaultOpen={true}>
            <p style={{ margin: "0 0 12px" }}>
              Under this Modified NNN lease, your maintenance responsibility is limited to capital items — any single repair or replacement costing <strong>$10,000 or more per occurrence</strong>, plus these specific exclusions regardless of cost:
            </p>
            <ul style={{ margin: "0 0 10px", paddingLeft: 20, fontSize: 13, lineHeight: 1.8 }}>
              <li>Full roof membrane/structure replacement</li>
              <li>Full HVAC system replacement (at end of useful life)</li>
              <li>Foundation repair and structural framing replacement</li>
              <li>Load-bearing wall and exterior envelope failures</li>
              <li>Main electrical and main plumbing service replacement</li>
              <li>Major parking lot repaving (full surface, not patching)</li>
              <li>Latent defects existing as of the Effective Date</li>
              <li>Pre-existing code violations not caused by tenant</li>
            </ul>
            <Callout type="info">
              Items excluded from Operating Costs also include debt service, leasing commissions, TI costs, your negligence costs, and pre-existing environmental remediation. These can never be passed through to the tenant.
            </Callout>
          </Section>

          <Section title="Capital Amortization for Tenant-Caused Damage" icon="⚖️">
            <p style={{ margin: "0 0 10px" }}>
              If a major building system (roof, HVAC, plumbing, electrical, structural) fails prematurely because of the tenant's negligence, improper maintenance, or misuse, you and the tenant can agree in writing to amortize the replacement cost over the useful life of the new system. The tenant's amortized share becomes Additional Rent.
            </p>
            <Callout type="tip">
              This is a targeted protection. If the tenant lets the HVAC system fail by not maintaining it (despite the required maintenance contract), you don't have to eat the full replacement cost. The amortization must be agreed in writing — neither party is forced into it. But the HVAC maintenance contract requirement gives you strong leverage in this situation.
            </Callout>
          </Section>

          <Section title="The Renovation (Your Biggest Obligation)" icon="🏗️">
            <p style={{ margin: "0 0 10px" }}>
              You are funding and managing the full renovation. The scope (Exhibit C / Schedule C-1) includes:
            </p>
            <ul style={{ margin: "0 0 10px", paddingLeft: 20, fontSize: 13, lineHeight: 1.8 }}>
              <li>Structural/envelope: roof, exterior walls, foundation, windows/doors, weatherproofing</li>
              <li>HVAC: new system sized for clinical occupancy, individual zone controls, healthcare ventilation</li>
              <li>Electrical: panel upgrade, dedicated medical circuits, emergency lighting, generator provisions</li>
              <li>Interior build-out: therapy rooms with sound attenuation, reception, admin, break room, storage, server room</li>
              <li>Technology: structured cabling, data drops per office, dedicated server room cooling</li>
              <li>Life safety: fire alarm/suppression, emergency exits, ADA accessibility, security system</li>
              <li>Exterior: parking lot repair/striping, ADA parking, landscaping, lighting, signage provisions</li>
              <li>Assembly Room: dedicated HVAC zone, access controls separating from clinical areas</li>
            </ul>
            <Callout type="warning">
              You must deliver with a certificate of occupancy. You warrant the improvements against defects for 12 months after delivery and assign manufacturer warranties to the tenant. Make sure Schedule C-1 is thorough — any ambiguity about what's included will work against you later.
            </Callout>
          </Section>

          <Section title="Change Orders" icon="📋">
            <p style={{ margin: "0 0 10px" }}>
              If field conditions, code requirements, or material unavailability require changes to the scope of work, you notify the tenant of the proposed change, cost impact, and schedule impact. If the change materially alters the scope or delays delivery by more than [THRESHOLD] days, the tenant can approve or reject within 5 business days.
            </p>
            <p style={{ margin: "0 0 10px" }}>
              The tenant can also request changes — but any cost increase from their requests is at their expense, and no tenant-requested change binds you unless you approve in writing. All change orders must be documented, signed by both parties.
            </p>
          </Section>

          <Section title="Early Access" icon="🔑">
            <p style={{ margin: "0 0 10px" }}>
              After you deliver the Anticipated Delivery Notice (90 days before expected completion), the tenant has non-exclusive access for setup activities: furniture/equipment install, cabling, licensing inspections, staff training.
            </p>
            <p style={{ margin: "0 0 10px" }}>
              <strong>Conditions:</strong> no interference with your contractors, tenant must carry insurance, follow site rules, and repair any damage caused. If you determine the tenant is interfering with construction, you can restrict access — and any resulting delay becomes Tenant Delay.
            </p>
            <Callout type="info">
              Early access does not trigger rent or the Commencement Date. Utility costs that can't be separated between your construction work and the tenant's early access activities are allocated by you in good faith.
            </Callout>
          </Section>

          <Section title="Access Restrictions (HIPAA)" icon="🔐">
            <p style={{ margin: "0 0 10px" }}>
              During clinic operating hours, your access is restricted to emergencies and pre-scheduled maintenance with 24 hours' written notice. No access to patient care areas during active therapy sessions (except imminent threat to life or property). All your personnel must follow the tenant's sign-in and visual privacy protocols.
            </p>
            <Callout type="info">
              In practice, most maintenance can be scheduled outside clinic hours. HIPAA violations carry serious federal penalties — these restrictions protect you as well as the tenant.
            </Callout>
          </Section>
        </div>
      )}

      {/* TIMELINE TAB */}
      {activeTab === "timeline" && (
        <div>
          <Section title="Lease Lifecycle" icon="📅" defaultOpen={true}>
            <div style={{ position: "relative", paddingLeft: 24 }}>
              {[
                { dot: "#6366f1", title: "Lease Signed (Effective Date)", desc: "Both parties execute. Guaranty and Security delivered. You take this to your lender to secure renovation financing." },
                { dot: "#ef4444", title: "Phase 1: Construction", desc: "You renovate. No rent owed. Tenant may have early access near end of this phase for setup activities (Article 8) — no rent triggered." },
                { dot: "#f59e0b", title: "Delivery Date = Commencement Date", desc: "You deliver with certificate of occupancy. Tenant inspects and submits punchlist within 10 business days. Phase 2 begins." },
                { dot: "#f59e0b", title: "Phase 2: NNN-Only Transition (up to 90 days)", desc: "Tenant pays NNN expenses only. They're setting up the clinic, credentialing, and hiring. No base rent yet." },
                { dot: "#22c55e", title: "Phase 3: Full Rent + Outside Opening Date", desc: "Tenant opens (or 90 days after delivery). Full rent begins. If tenant hasn't opened, they're also in default under the Failure to Open provision." },
                { dot: "#22c55e", title: "Annual Escalations", desc: "Each year on the Commencement Date anniversary, base rent increases by [ESCALATION_PERCENT]%. You can waive in any given year." },
                { dot: "#3b82f6", title: "Year 3: End of Initial Term", desc: "Lease auto-renews for another 3 years unless tenant delivered Notice to Quit 9+ months earlier. Base rent resets to FMV (your determination, 1%–4% band). Tenant can arbitrate at their cost." },
                { dot: "#3b82f6", title: "Year 3: Guaranty Burn-Off (if on track)", desc: "If tenant paid on time for 36 consecutive months from Phase 3, guaranty expires — but survives for any obligations that accrued during the guaranty period." },
                { dot: "#3b82f6", title: "Years 6, 9, 12: Subsequent Renewals", desc: "Same auto-renewal pattern with FMV reset. Tenant can opt out with 9 months' notice each time." },
                { dot: "#8b5cf6", title: "Year 15: Maximum Term Expires", desc: "Lease cannot extend beyond 15 years. Either party can record a memorandum of lease in the public records." },
              ].map((item, i) => (
                <div key={i} style={{ position: "relative", paddingBottom: 20, paddingLeft: 16 }}>
                  <div
                    style={{
                      position: "absolute",
                      left: -24,
                      top: 4,
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      background: item.dot,
                      border: "2px solid #fff",
                      boxShadow: `0 0 0 2px ${item.dot}40`,
                      zIndex: 1,
                    }}
                  />
                  {i < 9 && (
                    <div
                      style={{
                        position: "absolute",
                        left: -19,
                        top: 18,
                        width: 2,
                        height: "calc(100% - 10px)",
                        background: "#e2e8f0",
                      }}
                    />
                  )}
                  <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 3 }}>{item.title}</div>
                  <div style={{ fontSize: 13, color: "#475569" }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Key Deadlines to Track" icon="⏳">
            <div style={{ background: "#f8fafc", borderRadius: 8, padding: 14, marginBottom: 8 }}>
              <Term label="Outside Delivery Date" value="[OUTSIDE_DELIVERY_MONTHS] months after signing" />
              <Term label="Anticipated Delivery Notice" value="90 days before expected completion" />
              <Term label="Punchlist from Tenant" value="10 business days after delivery" />
              <Term label="Outside Opening Date (Phase 3 + Default)" value="90 days after delivery" />
              <Term label="SNDA from Lender" value="30 days after loan closing" />
              <Term label="Estoppel Certificates" value="10 business days after request" />
              <Term label="Annual NNN Reconciliation" value="Within 90 days of year-end" />
              <Term label="Renewal Notice to Quit" value="9 months before term expiration" />
              <Term label="FMV Renewal Rent Notice" value="120 days before renewal commencement" />
            </div>
          </Section>

          <Section title="What Happens If You Miss the Delivery Date?" icon="🚧">
            <p style={{ margin: "0 0 10px" }}>
              If you don't deliver by the Outside Delivery Date (as extended by Force Majeure and Tenant Delay):
            </p>
            <ul style={{ margin: "0 0 10px", paddingLeft: 20, fontSize: 13, lineHeight: 1.8 }}>
              <li>Tenant can terminate within 30 days' written notice</li>
              <li>If tenant terminates: you return the Security within 15 business days, the guaranty terminates, and neither party has further liability except surviving obligations</li>
              <li>If tenant doesn't terminate, you continue working toward delivery</li>
              <li>The deadline extends day-for-day for Tenant Delay and Force Majeure</li>
            </ul>
            <Callout type="warning">
              This is your biggest risk item. If renovations run significantly over schedule and the tenant walks, you'll have a renovated building without a tenant. Set the Outside Delivery Date with adequate buffer and keep the tenant informed of progress.
            </Callout>
          </Section>
        </div>
      )}

      {/* Footer */}
      <div
        style={{
          textAlign: "center",
          padding: "24px 0",
          marginTop: 12,
          borderTop: "1px solid #e2e8f0",
          fontSize: 12,
          color: "#94a3b8",
          lineHeight: 1.6,
        }}
      >
        <div>Prepared by Compass Real Estate Holdings — Contracts Coordination</div>
        <div>This guide is for informational purposes only and does not constitute legal advice.</div>
        <div>Both parties should review the full lease with qualified legal counsel.</div>
      </div>
    </div>
  );
}
