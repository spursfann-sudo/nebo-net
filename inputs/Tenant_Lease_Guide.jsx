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
    warning: { bg: "#fffbeb", border: "#fde68a", color: "#92400e", label: "Important" },
    tip: { bg: "#faf5ff", border: "#e9d5ff", color: "#6b21a8", label: "Why This Matters" },
    action: { bg: "#fef2f2", border: "#fecaca", color: "#991b1b", label: "Action Required" },
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

const PhaseCard = ({ phase, title, whatYouPay, color, children }) => (
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
    <div
      style={{
        display: "inline-block",
        fontSize: 12,
        fontWeight: 600,
        color,
        background: `${color}15`,
        padding: "2px 8px",
        borderRadius: 4,
        marginBottom: 6,
      }}
    >
      {whatYouPay}
    </div>
    <div style={{ fontSize: 13, color: "#334155" }}>{children}</div>
  </div>
);

const CostRow = ({ item, paidBy, note }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "1fr auto",
      gap: 8,
      padding: "8px 0",
      borderBottom: "1px solid #f1f5f9",
      fontSize: 13,
    }}
  >
    <div>
      <span style={{ fontWeight: 500 }}>{item}</span>
      {note && <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 2 }}>{note}</div>}
    </div>
    <span
      style={{
        fontWeight: 600,
        fontSize: 12,
        padding: "2px 10px",
        borderRadius: 20,
        background: paidBy === "You" ? "#fef3c7" : "#dcfce7",
        color: paidBy === "You" ? "#92400e" : "#166534",
        alignSelf: "center",
        whiteSpace: "nowrap",
      }}
    >
      {paidBy}
    </span>
  </div>
);

export default function TenantLeaseGuide() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "costs", label: "Your Costs" },
    { id: "rights", label: "Your Rights" },
    { id: "obligations", label: "Your Obligations" },
    { id: "risks", label: "Risks & Exits" },
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
        <div
          style={{
            fontSize: 12,
            fontWeight: 600,
            color: "#0d9488",
            letterSpacing: 1.5,
            textTransform: "uppercase",
            marginBottom: 6,
          }}
        >
          Tenant Reference Guide
        </div>
        <h1 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 6px", color: "#0f172a" }}>
          Modified NNN Lease Agreement
        </h1>
        <div style={{ fontSize: 14, color: "#64748b" }}>
          4000 Pulaski Pike NW, Huntsville, AL 35810
        </div>
        <div style={{ fontSize: 13, color: "#64748b", marginTop: 4 }}>
          Behavioral Health Clinic (VA CCN)
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
              This is a <strong>Modified Triple Net (NNN) Lease</strong> for your behavioral health clinic at 4000 Pulaski Pike NW. You pay base rent plus most operating costs — property taxes, insurance, and maintenance (now including routine roof, structural, and HVAC servicing under $10,000). The landlord handles capital items costing $10,000+ per occurrence and major system replacements at end of life.
            </p>
            <p style={{ margin: "0 0 10px" }}>
              You are signing <strong>before the building is renovated</strong>. The landlord needs a signed lease to secure financing. In exchange, you pay no rent during construction, get a 90-day transition period after delivery, and have non-exclusive early access rights to begin setup before the space is formally delivered.
            </p>
            <Callout type="tip">
              The "modified" part still works in your favor — in a pure NNN lease, you'd cover everything including the roof and structure. Here, the landlord keeps all capital expenses above $10,000 plus latent defects and pre-existing code violations. The $10,000 threshold clearly separates what's yours (routine) from what's the landlord's (capital).
            </Callout>
          </Section>

          <Section title="The Parties" icon="🤝">
            <Term label="Landlord" value="Bo Matthews Center of Excellence" />
            <Term label="Tenant" value="[Your Entity Name]" />
            <Term label="Guarantor" value="Kendall Newson" />
            <Term label="Property" value="4000 Pulaski Pike NW (~7,564 sq ft)" />
            <Term label="Permitted Use" value="Outpatient behavioral health clinic" />
          </Section>

          <Section title="Term Structure at a Glance" icon="📅">
            <div style={{ background: "#f0fdf4", borderRadius: 8, padding: 14, marginBottom: 10 }}>
              <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 6, color: "#166534" }}>
                Maximum: 15 years total
              </div>
              <p style={{ margin: 0, fontSize: 13, color: "#166534" }}>
                Starts with a 3-year Initial Term. Then it <strong>automatically renews</strong> in 3-year increments unless you opt out by delivering a "Notice to Quit" at least 9 months before the current term expires. The landlord cannot block renewal as long as you're not in default.
              </p>
            </div>
            <Callout type="success">
              The auto-renewal structure protects you — you have tenure stability for up to 15 years without needing to renegotiate. This is important for building your practice, maintaining VA CCN provider status, and establishing referral relationships.
            </Callout>
          </Section>

          <Section title="What the Landlord Is Doing for You" icon="🏗️">
            <p style={{ margin: "0 0 10px" }}>
              The landlord is fully funding the renovation, including:
            </p>
            <ul style={{ margin: "0 0 10px", paddingLeft: 20, fontSize: 13, lineHeight: 1.8 }}>
              <li>Full interior build-out (therapy rooms with sound attenuation, reception, admin, break room, storage, server room)</li>
              <li>HVAC sized for clinical occupancy with individual zone controls</li>
              <li>Electrical panel upgrade with dedicated medical circuits</li>
              <li>Technology infrastructure (structured cabling, data drops per office, server room cooling)</li>
              <li>ADA compliance throughout, fire/life safety systems</li>
              <li>Assembly Room with separate access controls from clinical areas</li>
              <li>Parking lot repair/striping with ADA-compliant spaces</li>
            </ul>
            <Callout type="warning">
              The detailed scope is in Schedule C-1 (the Work List). Before signing, make sure every improvement you need is explicitly listed. The lease includes a "No Warranty" clause — you accept the premises as-is at delivery except for the specific delivery conditions. Anything not in Schedule C-1 could be considered your responsibility.
            </Callout>
          </Section>

          <Section title="Key Lease Highlights" icon="📝">
            <p style={{ margin: "0 0 10px" }}>
              Key provisions to understand before signing:
            </p>
            <div style={{ background: "#fef2f2", borderRadius: 8, padding: 14, marginBottom: 8, border: "1px solid #fecaca" }}>
              <strong style={{ color: "#991b1b" }}>Provisions to be aware of:</strong>
              <ul style={{ margin: "6px 0 0", paddingLeft: 18, fontSize: 13, color: "#991b1b" }}>
                <li>You pay routine roof, structural, and HVAC maintenance (items under $10K)</li>
                <li>FMV at renewal is the landlord's determination; you bear full arbitration costs if you dispute</li>
                <li>Failure to Open is an explicit default (not just an automatic rent trigger)</li>
                <li>Landlord's LOC draw rights cover carrying costs and re-tenanting costs</li>
                <li>Guaranty survival clause means accrued obligations survive the burn-off</li>
              </ul>
            </div>
            <div style={{ background: "#f0fdf4", borderRadius: 8, padding: 14, marginBottom: 8, border: "1px solid #bbf7d0" }}>
              <strong style={{ color: "#166534" }}>Provisions that protect you:</strong>
              <ul style={{ margin: "6px 0 0", paddingLeft: 18, fontSize: 13, color: "#166534" }}>
                <li>Clear $10,000 capital threshold protects you from surprise large charges</li>
                <li>Capital exclusions explicitly cover latent defects and pre-existing code violations</li>
                <li>Management fee capped at [CAP]% or $[AMOUNT]</li>
                <li>Non-exclusive early access during pre-delivery period for setup</li>
                <li>Change order provisions give you approval rights on material scope changes</li>
                <li>Either party can record a memorandum of lease</li>
                <li>Email notification accepted for routine items</li>
              </ul>
            </div>
          </Section>
        </div>
      )}

      {/* COSTS TAB */}
      {activeTab === "costs" && (
        <div>
          <Section title="How Rent Phases In" icon="💰" defaultOpen={true}>
            <p style={{ margin: "0 0 12px" }}>
              You don't start paying full rent on day one. The three-phase structure gives you time during renovation and setup:
            </p>

            <PhaseCard
              phase="PHASE 1"
              title="Construction Period"
              whatYouPay="You pay: $0"
              color="#22c55e"
            >
              From lease signing through delivery. You owe nothing — no base rent, no NNN. You may have non-exclusive early access near the end of this phase for setup (Article 8), but it doesn't trigger rent.
            </PhaseCard>

            <PhaseCard
              phase="PHASE 2"
              title="NNN-Only Transition (up to 90 days)"
              whatYouPay="You pay: NNN expenses only"
              color="#f59e0b"
            >
              Starts when landlord delivers the renovated space. You pay only operating expenses (taxes, insurance, maintenance) — no base rent. Use this time for fit-out, EHR setup, VA credentialing, insurance paneling, hiring, and pre-opening preparation.
            </PhaseCard>

            <PhaseCard
              phase="PHASE 3"
              title="Full Rent"
              whatYouPay="You pay: Base Rent + NNN"
              color="#ef4444"
            >
              Begins when you open or 90 days after delivery — whichever is first. This is the "Outside Opening Date." Even if you're not open, full rent starts at the 90-day mark. Additionally, failure to open by this date is an explicit default.
            </PhaseCard>

            <Callout type="action">
              The 90-day Outside Opening Date now carries a double consequence: full rent AND a default trigger. Plan your setup timeline carefully. If credentialing, equipment, or licensing could take longer than 90 days, raise this concern before signing.
            </Callout>
          </Section>

          <Section title="Base Rent" icon="🏠">
            <Term label="Annual Rate" value="$[AMOUNT] per sq ft per year" />
            <Term label="Monthly Payment" value="$[AMOUNT] per month" />
            <Term label="Due Date" value="1st of each month (advance)" />
            <Term label="Anti-Setoff" value="No offset, setoff, counterclaim, or deduction except cure-and-offset right" />
          </Section>

          <Section title="How Rent Changes Over Time" icon="📈">
            <div style={{ background: "#f8fafc", borderRadius: 8, padding: 14, marginBottom: 10 }}>
              <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 6 }}>
                Within Each 3-Year Term: Annual Escalation
              </div>
              <p style={{ margin: 0, fontSize: 13 }}>
                Rent increases by [ESCALATION_PERCENT]% every year on the Commencement Date anniversary. The landlord can waive this in any given year. If waived, the next year's increase is calculated on the rent as last increased (no compounding through waived years).
              </p>
            </div>
            <div style={{ background: "#f8fafc", borderRadius: 8, padding: 14, marginBottom: 10 }}>
              <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 6 }}>
                At Each 3-Year Renewal: Fair Market Value Reset
              </div>
              <p style={{ margin: 0, fontSize: 13 }}>
                The landlord sets renewal rent to Fair Market Value in their reasonable discretion, subject to a <strong>1% floor</strong> and <strong>4% cap</strong> over the outgoing rate. They notify you 120 days before the renewal starts. If you disagree, you can invoke three-appraiser arbitration — but <strong>you bear the full cost of all three appraisers</strong>.
              </p>
            </div>
            <Callout type="warning">
              The 4% cap remains your key protection against a hot market. But the cost of arbitration now falls entirely on you. Practically, this means challenging the landlord's determination only makes sense if the gap between their number and true FMV is large enough to justify three appraiser fees. For small disputes within the 1%–4% band, the landlord's number will likely stand.
            </Callout>
          </Section>

          <Section title="Who Pays for What (NNN Breakdown)" icon="📊">
            <p style={{ margin: "0 0 10px" }}>
              Here's what you're responsible for beyond base rent:
            </p>
            <CostRow item="Property Taxes" paidBy="You" note="100% passed through" />
            <CostRow item="Building Insurance (Landlord's policy)" paidBy="You" note="Premiums passed through" />
            <CostRow item="Your Own Insurance Policies" paidBy="You" note="CGL, professional liability, cyber, etc." />
            <CostRow item="Utilities" paidBy="You" note="Direct contracts with providers" />
            <CostRow item="Routine Roof Maintenance" paidBy="You" note="Patching, gutters, flashing, minor membrane < $10K" />
            <CostRow item="Routine Structural Maintenance" paidBy="You" note="Tuckpointing, caulking, crack repair < $10K" />
            <CostRow item="Routine HVAC Maintenance" paidBy="You" note="Filters, coils, refrigerant, belts, PM contracts < $10K" />
            <CostRow item="Landscaping, Pest Control, Trash" paidBy="You" note="Part of Operating Costs" />
            <CostRow item="Parking Lot Patching & Striping" paidBy="You" note="Routine only, not full repaving" />
            <CostRow item="Janitorial (common areas)" paidBy="You" />
            <CostRow item="Management/Admin Fee" paidBy="You" note="Capped at [CAP]% or $[AMOUNT], whichever is less" />
            <div style={{ height: 12 }} />
            <CostRow item="Capital Items (>= $10,000/occurrence)" paidBy="Landlord" note="Clear threshold" />
            <CostRow item="Full Roof / HVAC / Structural Replacement" paidBy="Landlord" note="End-of-life replacements" />
            <CostRow item="Latent Defects" paidBy="Landlord" note="NEW exclusion: defects existing at signing" />
            <CostRow item="Pre-Existing Code Violations" paidBy="Landlord" note="NEW exclusion: not caused by your use" />
            <CostRow item="Debt Service" paidBy="Landlord" note="NEW exclusion: mortgage principal/interest" />
            <CostRow item="Leasing Commissions / TI Costs" paidBy="Landlord" note="NEW exclusion: landlord's leasing costs" />
            <CostRow item="Major Parking Repaving" paidBy="Landlord" note="Full surface repave" />
            <CostRow item="Assembly Room Event Costs" paidBy="Landlord" note="Cleaning, utilities, insurance for landlord events" />

            <Callout type="info">
              NNN expenses are billed monthly as 1/12 of the annual estimate. Reconciliation within 90 days of year-end. Controllable costs (everything except taxes, insurance, utilities, snow removal, government-imposed costs) are capped at [CONTROLLABLE_CAP_PERCENT]% year-over-year. You have audit rights — if landlord overstated by more than 3%, they pay for the audit.
            </Callout>
          </Section>

          <Section title="Capital Amortization Risk" icon="⚠️">
            <p style={{ margin: "0 0 10px" }}>
              If a major system (roof, HVAC, plumbing, electrical, structural) fails prematurely because of <strong>your negligence, improper maintenance, or misuse</strong>, the landlord can propose amortizing the replacement cost over the system's useful life. Your amortized share becomes Additional Rent.
            </p>
            <Callout type="warning">
              This can only take effect if both parties agree in writing — you can't be forced into it. But it gives the landlord leverage if you've neglected maintenance. The best defense: keep your HVAC maintenance contract current and document all maintenance activities carefully.
            </Callout>
          </Section>

          <Section title="Security Deposit / Letter of Credit" icon="🏦">
            <Term label="Amount" value="[SECURITY_MULTIPLE] months (Base Rent + est. NNN)" />
            <Term label="Form" value="Cash or irrevocable standby LOC (Exhibit I)" />
            <Term label="Due" value="Within [SECURITY_DELIVERY_DAYS] days of signing" />
            <Term label="Replenishment" value="15 business days after draw" />
            <Term label="Return" value="30 days after lease expiration + premises surrender" />
            <Callout type="warning">
              The landlord has broad draw rights. They can draw for: monetary defaults, non-monetary defaults, carrying costs during vacancy, re-tenanting costs (brokerage, TI concessions, free rent, legal, marketing), enforcement costs, AND failure-to-open costs. Failure to replenish after a draw is itself a monetary default.
            </Callout>
          </Section>
        </div>
      )}

      {/* RIGHTS TAB */}
      {activeTab === "rights" && (
        <div>
          <Section title="Your Right to Stay (Automatic Renewal)" icon="🏠" defaultOpen={true}>
            <p style={{ margin: "0 0 10px" }}>
              This lease automatically renews every 3 years unless you send a Notice to Quit at least 9 months before the current term expires. The landlord cannot block renewal as long as you're not in default.
            </p>
            <div style={{ background: "#f0fdf4", borderRadius: 8, padding: 14, marginBottom: 10, border: "1px solid #bbf7d0" }}>
              <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 6, color: "#166534" }}>
                Renewal Timeline
              </div>
              <div style={{ fontSize: 13, color: "#166534" }}>
                <div style={{ marginBottom: 4 }}>Initial Term: Years 0–3</div>
                <div style={{ marginBottom: 4 }}>First Renewal: Years 3–6 (auto, unless you quit by month 27)</div>
                <div style={{ marginBottom: 4 }}>Second Renewal: Years 6–9 (auto, unless you quit by month 63)</div>
                <div style={{ marginBottom: 4 }}>Third Renewal: Years 9–12 (auto)</div>
                <div>Fourth Renewal: Years 12–15 (auto; final — 15 year maximum)</div>
              </div>
            </div>
          </Section>

          <Section title="Early Access Rights" icon="🔑">
            <p style={{ margin: "0 0 10px" }}>
              After the landlord delivers the Anticipated Delivery Notice (about 90 days before expected completion), you have <strong>non-exclusive access</strong> for:
            </p>
            <ul style={{ margin: "0 0 10px", paddingLeft: 20, fontSize: 13, lineHeight: 1.8 }}>
              <li>Furniture, fixtures, and equipment installation</li>
              <li>Technology and cabling setup</li>
              <li>State licensing inspections</li>
              <li>Staff orientation and training</li>
            </ul>
            <Callout type="success">
              This early access does NOT trigger rent or the Commencement Date. You're getting setup time before the formal delivery. But you must carry insurance, follow the general contractor's site rules, not interfere with construction, and repair any damage you cause.
            </Callout>
          </Section>

          <Section title="Patient Privacy Protections (HIPAA)" icon="🔐">
            <p style={{ margin: "0 0 10px" }}>
              Strong protections for your patients' privacy and your HIPAA compliance:
            </p>
            <ul style={{ margin: "0 0 10px", paddingLeft: 20, fontSize: 13, lineHeight: 1.8 }}>
              <li>Landlord must give 24 hours' written notice before entering during clinic hours</li>
              <li>No landlord access to patient care areas during active therapy sessions (except emergencies)</li>
              <li>Landlord must follow your access protocols (sign-in, visual privacy safeguards)</li>
              <li>During Assembly Room events, clinical areas must be physically secured</li>
              <li>Soundproofing in therapy rooms is part of the landlord's renovation scope</li>
            </ul>
            <Callout type="tip">
              Establish your access protocols early and put them in writing. The lease gives you the right to set the rules for how the landlord enters during business hours.
            </Callout>
          </Section>

          <Section title="Change Order Rights" icon="📝">
            <p style={{ margin: "0 0 10px" }}>
              If the landlord needs to change the renovation scope due to field conditions or code requirements and the change materially alters the scope or delays delivery by more than [THRESHOLD] days, you can <strong>approve or reject</strong> within 5 business days.
            </p>
            <p style={{ margin: "0 0 10px" }}>
              You can also request changes to the scope of work — but any cost increase from your requests is at your expense, and the landlord must approve in writing. All change orders are documented and signed by both parties.
            </p>
          </Section>

          <Section title="Walk-Away Right If Delivery Is Late" icon="🚪">
            <p style={{ margin: "0 0 10px" }}>
              If the landlord doesn't deliver by the Outside Delivery Date ([OUTSIDE_DELIVERY_MONTHS] months after signing), you can terminate with 30 days' notice. Upon termination: Security returned within 15 business days, Guaranty terminates, neither party has further liability except surviving obligations.
            </p>
            <Callout type="warning">
              The deadline extends for Tenant Delay and Force Majeure. Respond promptly to all landlord requests for design input or approvals — any delay attributable to you extends the landlord's deadline.
            </Callout>
          </Section>

          <Section title="Audit Rights (NNN Expenses)" icon="🔍">
            <p style={{ margin: "0 0 10px" }}>
              You can audit the landlord's records upon 10 business days' notice. Landlord keeps records for 3 years. If the audit shows overstatement exceeding 3%, the landlord pays for the audit and refunds the overcharge.
            </p>
            <Callout type="success">
              With routine roof, structural, and HVAC costs included in your operating expenses, your audit rights are especially important. Make sure the landlord is properly distinguishing routine items (your cost) from capital items over $10,000 (their cost).
            </Callout>
          </Section>

          <Section title="Assignment and Subletting" icon="🔄">
            <p style={{ margin: "0 0 10px" }}>
              Landlord consent required (not unreasonably withheld), except for three categories of <strong>Permitted Transfers</strong> that need no consent:
            </p>
            <ul style={{ margin: "0 0 10px", paddingLeft: 20, fontSize: 13, lineHeight: 1.8 }}>
              <li><strong>Affiliate transfers:</strong> Moving the lease to an entity you control</li>
              <li><strong>Mergers/reorganizations:</strong> Selling your practice through a merger, if the buyer has comparable creditworthiness</li>
              <li><strong>Behavioral health subtenants:</strong> Subletting individual offices to licensed behavioral health providers for clinical use</li>
            </ul>
            <Callout type="tip">
              The ability to sublet offices to licensed therapists without landlord consent gives you flexibility to bring in independent contractors or fill unused offices with other behavioral health providers.
            </Callout>
          </Section>

          <Section title="Landlord Default: Your Remedies" icon="⚖️">
            <p style={{ margin: "0 0 10px" }}>
              If the landlord fails to perform a material obligation (e.g., doesn't make a required capital repair):
            </p>
            <ul style={{ margin: "0 0 10px", paddingLeft: 20, fontSize: 13, lineHeight: 1.8 }}>
              <li>Send written notice specifying the default</li>
              <li>Landlord has 30 days to cure (or longer if diligently prosecuting)</li>
              <li>If still uncured and it materially impairs your use or threatens health/safety, send a second 15-day notice</li>
              <li>Then you can cure it yourself and offset documented costs against Base Rent over up to 12 months</li>
            </ul>
            <Callout type="success">
              The cure-and-offset right is valuable. If the roof is leaking and the landlord won't fix it, you're not helpless — fix it, document costs, and deduct from rent over the following year.
            </Callout>
          </Section>

          <Section title="Non-Disturbance (SNDA)" icon="🏦">
            <p style={{ margin: "0 0 10px" }}>
              The landlord is getting a construction loan. Your lease will be subordinate to that mortgage, but the landlord must obtain an SNDA from their lender. This means if the landlord defaults on the loan and the bank forecloses, <strong>your lease survives</strong> — you can keep operating your clinic.
            </p>
            <Callout type="warning">
              Follow up to confirm you actually receive the SNDA. If the landlord fails to deliver within 60 days of your request, the lease becomes superior to the lien automatically until delivered. But getting it proactively is much better than relying on that fallback.
            </Callout>
          </Section>

          <Section title="Memorandum of Lease" icon="📄">
            <p style={{ margin: "0 0 10px" }}>
              Either party can record a short-form memorandum of the lease in the Madison County records. It identifies the parties, premises, and term but omits financial terms. The other party must cooperate within 15 business days.
            </p>
            <Callout type="info">
              Recording a memorandum gives public notice that your lease exists. This can be useful for your business credibility and helps protect your interest against subsequent buyers who might claim they didn't know about your lease.
            </Callout>
          </Section>
        </div>
      )}

      {/* OBLIGATIONS TAB */}
      {activeTab === "obligations" && (
        <div>
          <Section title="What You Must Do Before Opening" icon="✅" defaultOpen={true}>
            <div style={{ background: "#f8fafc", borderRadius: 8, padding: 14, marginBottom: 8 }}>
              <div style={{ display: "flex", gap: 8, marginBottom: 4 }}>
                <span style={{ fontSize: 16 }}>📄</span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 13 }}>Security Deposit or Letter of Credit</div>
                  <div style={{ fontSize: 12, color: "#64748b" }}>[SECURITY_MULTIPLE] months Base Rent + NNN. Cash or irrevocable standby LOC from a federally insured institution. Due within [SECURITY_DELIVERY_DAYS] days of signing.</div>
                </div>
              </div>
            </div>
            <div style={{ background: "#f8fafc", borderRadius: 8, padding: 14, marginBottom: 8 }}>
              <div style={{ display: "flex", gap: 8, marginBottom: 4 }}>
                <span style={{ fontSize: 16 }}>🛡️</span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 13 }}>Personal Guaranty (Kendall Newson)</div>
                  <div style={{ fontSize: 12, color: "#64748b" }}>Executed simultaneously with the lease. Covers all monetary obligations, failure to open, early termination, and enforcement costs.</div>
                </div>
              </div>
            </div>
            <div style={{ background: "#f8fafc", borderRadius: 8, padding: 14, marginBottom: 8 }}>
              <div style={{ display: "flex", gap: 8, marginBottom: 4 }}>
                <span style={{ fontSize: 16 }}>📑</span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 13 }}>Insurance Certificates</div>
                  <div style={{ fontSize: 12, color: "#64748b" }}>All required policies (CGL, professional liability, umbrella, workers' comp, cyber, auto, business property, business interruption) with landlord named as additional insured. Due before first access or Commencement Date.</div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="Insurance You Must Carry" icon="📑">
            <Term label="General Liability (CGL)" value="$1M / $2M aggregate" />
            <Term label="Professional Liability" value="$1M per claim / $3M aggregate" />
            <Term label="Umbrella / Excess" value="$2M per occurrence and aggregate" />
            <Term label="Workers' Comp" value="Statutory ($500K employer's liability)" />
            <Term label="Business Property" value="Replacement cost, all-risk" />
            <Term label="Business Interruption" value="12 months projected revenue" />
            <Term label="Cyber Liability" value="$1M" />
            <Term label="Commercial Auto" value="$1M CSL" />
            <div style={{ height: 8 }} />
            <Callout type="info">
              CGL and umbrella must name the landlord as additional insured, be primary/non-contributory. Carrier must be A-VII+ rated with 30 days' cancellation notice. All policies must include waiver of subrogation in landlord's favor.
            </Callout>
          </Section>

          <Section title="Ongoing Maintenance" icon="🔧">
            <p style={{ margin: "0 0 10px" }}>
              Your maintenance responsibilities include routine roof, structural, and HVAC items under $10,000:
            </p>
            <ul style={{ margin: "0 0 10px", paddingLeft: 20, fontSize: 13, lineHeight: 1.8 }}>
              <li>Interior finishes, painting, flooring, doors, hardware, plumbing fixtures</li>
              <li><strong>Routine roof maintenance</strong> (patching, gutters, flashing, minor membrane repair)</li>
              <li><strong>Routine structural maintenance</strong> (tuckpointing, caulking, crack repair)</li>
              <li><strong>HVAC preventive maintenance</strong> — you <strong>must</strong> keep a service contract with a licensed HVAC company</li>
              <li>Landscaping, pest control, janitorial, trash removal</li>
              <li>Parking lot patching and striping (not full repaving)</li>
              <li>All utilities (direct contracts)</li>
              <li>Exterior lighting, fire/life-safety inspections</li>
            </ul>
            <Callout type="action">
              The HVAC maintenance contract is specifically required. Failure to maintain it is a non-monetary default. Set this up immediately upon taking possession. Keep records — if a major system fails, the landlord may argue tenant negligence triggered the capital amortization provision.
            </Callout>
          </Section>

          <Section title="Personal Guaranty Details" icon="✍️">
            <div style={{ background: "#fef2f2", borderRadius: 8, padding: 14, marginBottom: 10, border: "1px solid #fecaca" }}>
              <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 6, color: "#991b1b" }}>
                What's Guaranteed
              </div>
              <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, color: "#991b1b", lineHeight: 1.8 }}>
                <li>All monetary obligations during the guaranty period</li>
                <li>The obligation to actually open for business after renovations</li>
                <li>Early termination or default damages</li>
                <li>Landlord's enforcement costs (attorneys' fees, court costs)</li>
              </ul>
            </div>
            <div style={{ background: "#f0fdf4", borderRadius: 8, padding: 14, marginBottom: 10, border: "1px solid #bbf7d0" }}>
              <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 6, color: "#166534" }}>
                The Burn-Off (How It Ends)
              </div>
              <p style={{ margin: 0, fontSize: 13, color: "#166534" }}>
                After <strong>36 consecutive months of on-time rent payments</strong> (received by the 5th of the month) from Phase 3 commencement, the guaranty terminates. One late payment resets the clock to zero.
              </p>
            </div>
            <div style={{ background: "#eff6ff", borderRadius: 8, padding: 14, marginBottom: 10, border: "1px solid #bfdbfe" }}>
              <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 6, color: "#1e40af" }}>
                Survival Clause
              </div>
              <p style={{ margin: 0, fontSize: 13, color: "#1e40af" }}>
                Even after burn-off, the guaranty <strong>survives for obligations that accrued before the burn-off date</strong>. This means unpaid rent, outstanding NNN reconciliation amounts, or unreimbursed costs from the guaranty period can still be pursued against Kendall Newson personally, regardless of when the landlord makes the demand.
              </p>
            </div>
            <Callout type="warning">
              There is no dollar cap on the personal guaranty. The landlord can pursue Kendall Newson directly without suing the tenant entity first. Take the 36-month period seriously — one late payment resets the entire clock. And make sure all reconciliation amounts from the guaranty period are settled promptly.
            </Callout>
          </Section>

          <Section title="Licensing and Compliance (All on You)" icon="⚕️">
            <ul style={{ margin: "0 0 10px", paddingLeft: 20, fontSize: 13, lineHeight: 1.8 }}>
              <li>Alabama behavioral health facility licensing</li>
              <li>VA CCN provider credentialing and enrollment</li>
              <li>DEA registration (if prescribing controlled substances)</li>
              <li>HIPAA compliance (policies, procedures, safeguards)</li>
              <li>Pharmaceutical and medical waste disposal (sole responsibility, with indemnification to landlord)</li>
              <li>Individual provider licensure for all therapists and NPs</li>
            </ul>
          </Section>

          <Section title="At Lease End: Surrender Requirements" icon="🚚">
            <ul style={{ margin: "0 0 10px", paddingLeft: 20, fontSize: 13, lineHeight: 1.8 }}>
              <li>Return premises in Commencement Date condition (reasonable wear and tear excepted)</li>
              <li>Remove all personal property, trade fixtures, clinical equipment, signage</li>
              <li>Repair any damage caused by removal</li>
              <li><strong>Remove or securely destroy all PHI and patient records</strong> per HIPAA</li>
              <li>Landlord may elect in writing to retain any of your alterations</li>
            </ul>
          </Section>
        </div>
      )}

      {/* RISKS TAB */}
      {activeTab === "risks" && (
        <div>
          <Section title="Your Biggest Risk: The 90-Day Outside Opening Date" icon="⏱️" defaultOpen={true}>
            <p style={{ margin: "0 0 10px" }}>
              Full rent starts 90 days after delivery, whether or not you've opened. This is also an <strong>explicit default trigger</strong>. If you haven't opened, haven't been diligently preparing, or refuse to accept possession:
            </p>
            <ul style={{ margin: "0 0 10px", paddingLeft: 20, fontSize: 13 }}>
              <li style={{ marginBottom: 4 }}>Full Base Rent + Additional Rent become due regardless</li>
              <li style={{ marginBottom: 4 }}>Landlord can terminate the lease on 10 days' notice</li>
              <li style={{ marginBottom: 4 }}>Landlord can draw on your Security for carrying costs and re-tenanting costs</li>
              <li style={{ marginBottom: 4 }}>Landlord can recover damages including unamortized Landlord Improvement costs</li>
              <li style={{ marginBottom: 4 }}>Personal guarantor (Kendall Newson) is exposed</li>
            </ul>
            <Callout type="action">
              Before signing, realistically assess: (1) VA CCN enrollment timeline, (2) insurance panel credentialing per provider, (3) equipment procurement and install, (4) EHR setup and testing, (5) staff hiring. If any could push past 90 days, negotiate a longer transition or discuss this risk explicitly.
            </Callout>
          </Section>

          <Section title="Construction Delays" icon="🏗️">
            <p style={{ margin: "0 0 10px" }}>
              You're signing before renovations. Your protection is the Outside Delivery Date — if the landlord misses it (as extended by Force Majeure and Tenant Delay), you can walk away within 30 days. Security returned, Guaranty terminates, no further liability.
            </p>
            <Callout type="warning">
              Respond quickly and in writing to all landlord requests during construction. Any delay attributable to you extends the landlord's deadline and pushes back your termination right. The lease includes a Change Order process — engage with it promptly.
            </Callout>
          </Section>

          <Section title="Broader LOC Draw Rights" icon="💳">
            <p style={{ margin: "0 0 10px" }}>
              The landlord has broad rights to draw your security deposit for:
            </p>
            <ul style={{ margin: "0 0 10px", paddingLeft: 20, fontSize: 13, lineHeight: 1.8 }}>
              <li>Monetary and non-monetary defaults</li>
              <li><strong>Carrying costs</strong> — taxes, insurance, utilities, maintenance during vacancy caused by your default</li>
              <li><strong>Re-tenanting costs</strong> — brokerage commissions, TI concessions, free rent for new tenant, legal fees, marketing</li>
              <li>Enforcement costs (attorneys' fees, court costs)</li>
              <li>Failure-to-open costs</li>
            </ul>
            <Callout type="warning">
              Re-tenanting costs can be substantial — the landlord could draw your entire deposit to cover brokerage and concessions for a replacement tenant. Make sure you understand the full exposure and factor it into your decision-making.
            </Callout>
          </Section>

          <Section title="What Happens If You Default" icon="⚠️">
            <div style={{ background: "#f8fafc", borderRadius: 8, padding: 14, marginBottom: 8 }}>
              <div style={{ fontWeight: 600, fontSize: 13, color: "#dc2626", marginBottom: 4 }}>Missed Rent</div>
              <div style={{ fontSize: 13 }}>5 business days to cure after notice. If not cured: default. Landlord can terminate, draw on Security, accelerate rent, pursue guarantor, sue for damages. Remedies are cumulative.</div>
            </div>
            <div style={{ background: "#f8fafc", borderRadius: 8, padding: 14, marginBottom: 8 }}>
              <div style={{ fontWeight: 600, fontSize: 13, color: "#dc2626", marginBottom: 4 }}>Failed to Maintain Security</div>
              <div style={{ fontSize: 13 }}>15 business days to replenish after notice. Failure is a monetary default.</div>
            </div>
            <div style={{ background: "#f8fafc", borderRadius: 8, padding: 14, marginBottom: 8 }}>
              <div style={{ fontWeight: 600, fontSize: 13, color: "#dc2626", marginBottom: 4 }}>Other Breaches</div>
              <div style={{ fontSize: 13 }}>30-day cure period (90 days if diligently prosecuting). Examples: HVAC contract lapse, unauthorized alterations, use violations.</div>
            </div>
            <div style={{ background: "#f8fafc", borderRadius: 8, padding: 14, marginBottom: 8 }}>
              <div style={{ fontWeight: 600, fontSize: 13, color: "#dc2626", marginBottom: 4 }}>Abandonment</div>
              <div style={{ fontSize: 13 }}>30+ consecutive days without landlord consent.</div>
            </div>
            <div style={{ background: "#f8fafc", borderRadius: 8, padding: 14, marginBottom: 8 }}>
              <div style={{ fontWeight: 600, fontSize: 13, color: "#dc2626", marginBottom: 4 }}>Bankruptcy</div>
              <div style={{ fontSize: 13 }}>Filing not dismissed within 60 days.</div>
            </div>
            <div style={{ background: "#fef2f2", borderRadius: 8, padding: 14, marginBottom: 8, border: "1px solid #fecaca" }}>
              <div style={{ fontWeight: 600, fontSize: 13, color: "#991b1b", marginBottom: 4 }}>Failure to Open</div>
              <div style={{ fontSize: 13, color: "#991b1b" }}>Not open by Outside Opening Date (90 days post-delivery), not diligently preparing, or refusing possession. Landlord can terminate on 10 days' notice, draw Security for carrying/re-tenanting costs, recover damages including unamortized Landlord Improvement costs.</div>
            </div>
          </Section>

          <Section title="How to Exit This Lease" icon="🚪">
            <div style={{ background: "#f8fafc", borderRadius: 8, padding: 14, marginBottom: 8 }}>
              <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>Opt Out of Renewal</div>
              <div style={{ fontSize: 13 }}>Send a Notice to Quit at least 9 months before any term expires. Lease ends at expiration. No penalty.</div>
            </div>
            <div style={{ background: "#f8fafc", borderRadius: 8, padding: 14, marginBottom: 8 }}>
              <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>Landlord Fails to Deliver</div>
              <div style={{ fontSize: 13 }}>If building isn't delivered by Outside Delivery Date, you can terminate within 30 days. Security returned, Guaranty terminates.</div>
            </div>
            <div style={{ background: "#f8fafc", borderRadius: 8, padding: 14, marginBottom: 8 }}>
              <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>Casualty (Fire/Disaster)</div>
              <div style={{ fontSize: 13 }}>If estimated repair exceeds 180 days, either party can terminate on 30 days' notice. Rent abates during restoration.</div>
            </div>
            <div style={{ background: "#f8fafc", borderRadius: 8, padding: 14, marginBottom: 8 }}>
              <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>Condemnation</div>
              <div style={{ fontSize: 13 }}>If a material portion taken so you can't reasonably operate, either party can terminate. You pursue your own condemnation claim.</div>
            </div>
            <div style={{ background: "#fef2f2", borderRadius: 8, padding: 14, marginBottom: 8, border: "1px solid #fecaca" }}>
              <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4, color: "#991b1b" }}>Early Termination (Walking Away)</div>
              <div style={{ fontSize: 13, color: "#991b1b" }}>There is no early termination option. If you leave before a term ends, the landlord can pursue remaining rent and damages. During the guaranty period, Kendall Newson is personally liable. The landlord can also accelerate all remaining rent (discounted to present value).</div>
            </div>
            <Callout type="tip">
              If you want an early termination right ("kick-out clause"), you'd need to negotiate that specifically — typically a termination fee equal to several months' rent plus unamortized Landlord Improvement costs. This is not currently in the draft.
            </Callout>
          </Section>

          <Section title="Key Dates to Calendar" icon="📅">
            <div style={{ background: "#f8fafc", borderRadius: 8, padding: 14 }}>
              <Term label="Security Due" value="[SECURITY_DELIVERY_DAYS] days after signing" />
              <Term label="Outside Delivery Date" value="[OUTSIDE_DELIVERY_MONTHS] months after signing" />
              <Term label="Punchlist Submission" value="10 business days after delivery" />
              <Term label="Outside Opening Date (Phase 3 + Default)" value="90 days after delivery" />
              <Term label="Guaranty Burn-Off Target" value="36 months from Phase 3" />
              <Term label="First Renewal Decision" value="27 months into Initial Term (9 months before Year 3)" />
              <Term label="FMV Renewal Notice from Landlord" value="120 days before renewal" />
              <Term label="Arbitration Election (if disputing FMV)" value="30 days after landlord's FMV notice" />
              <Term label="NNN Reconciliation" value="Within 90 days of each year-end" />
              <Term label="Insurance Renewal Certs" value="Upon each renewal" />
            </div>
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
