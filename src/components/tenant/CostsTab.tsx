import Section from "@/components/ui/Section";
import Callout from "@/components/ui/Callout";
import Term from "@/components/ui/Term";
import PhaseCard from "@/components/ui/PhaseCard";
import CostRow from "@/components/ui/CostRow";
import { leaseConfig } from "@/lib/lease-config";

const tab = "costs";

export default function CostsTab() {
  return (
    <div>
      <Section title="How Rent Phases In" icon="💰" defaultOpen={true} party="tenant" tab={tab}>
        <p className="mb-3">
          You don&apos;t start paying full rent on day one. The three-phase structure gives you time during renovation and setup:
        </p>

        <PhaseCard phase="PHASE 1" title="Construction Period" badge="You pay: $0" color="#22c55e">
          From lease signing through delivery. You owe nothing — no base rent, no NNN. You may have non-exclusive early access near the end of this phase for setup (Article 8), but it doesn&apos;t trigger rent.
        </PhaseCard>

        <PhaseCard phase="PHASE 2" title="NNN-Only Transition (up to 90 days)" badge="You pay: NNN expenses only" color="#f59e0b">
          Starts when landlord delivers the renovated space. You pay only operating expenses (taxes, insurance, maintenance) — no base rent. Use this time for fit-out, EHR setup, VA credentialing, insurance paneling, hiring, and pre-opening preparation.
        </PhaseCard>

        <PhaseCard phase="PHASE 3" title="Full Rent" badge="You pay: Base Rent + NNN" color="#ef4444">
          Begins when you open or 90 days after delivery — whichever is first. This is the &ldquo;Outside Opening Date.&rdquo; Even if you&apos;re not open, full rent starts at the 90-day mark. Additionally, failure to open by this date is an explicit default.
        </PhaseCard>

        <Callout type="action">
          The 90-day Outside Opening Date now carries a double consequence: full rent AND a default trigger. Plan your setup timeline carefully. If credentialing, equipment, or licensing could take longer than 90 days, raise this concern before signing.
        </Callout>
      </Section>

      <Section title="Base Rent" icon="🏠" party="tenant" tab={tab}>
        <Term label="Annual Rate" value={`$${leaseConfig.amount} per sq ft per year`} />
        <Term label="Monthly Payment" value={`$${leaseConfig.monthlyAmount} per month`} />
        <Term label="Due Date" value="1st of each month (advance)" />
        <Term label="Anti-Setoff" value="No offset, setoff, counterclaim, or deduction except cure-and-offset right" />
      </Section>

      <Section title="How Rent Changes Over Time" icon="📈" party="tenant" tab={tab}>
        <div className="bg-slate-50 rounded-lg p-3.5 mb-2.5">
          <div className="font-semibold text-sm mb-1.5">
            Within Each 3-Year Term: Annual Escalation
          </div>
          <p className="text-[13px]">
            Rent increases by {leaseConfig.escalationPercent}% every year on the Commencement Date anniversary. The landlord can waive this in any given year. If waived, the next year&apos;s increase is calculated on the rent as last increased (no compounding through waived years).
          </p>
        </div>
        <div className="bg-slate-50 rounded-lg p-3.5 mb-2.5">
          <div className="font-semibold text-sm mb-1.5">
            At Each 3-Year Renewal: Fair Market Value Reset
          </div>
          <p className="text-[13px]">
            The landlord sets renewal rent to Fair Market Value in their reasonable discretion, subject to a <strong>1% floor</strong> and <strong>4% cap</strong> over the outgoing rate. They notify you 120 days before the renewal starts. If you disagree, you can invoke three-appraiser arbitration — but <strong>you bear the full cost of all three appraisers</strong>.
          </p>
        </div>
        <Callout type="warning">
          The 4% cap remains your key protection against a hot market. But the cost of arbitration now falls entirely on you. Practically, this means challenging the landlord&apos;s determination only makes sense if the gap between their number and true FMV is large enough to justify three appraiser fees. For small disputes within the 1%–4% band, the landlord&apos;s number will likely stand.
        </Callout>
      </Section>

      <Section title="Who Pays for What (NNN Breakdown)" icon="📊" party="tenant" tab={tab}>
        <p className="mb-2.5">
          Here&apos;s what you&apos;re responsible for beyond base rent:
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
        <CostRow item="Management/Admin Fee" paidBy="You" note={`Capped at ${leaseConfig.cap}% or $${leaseConfig.capAmount}, whichever is less`} />
        <div className="h-3" />
        <CostRow item="Capital Items (>= $10,000/occurrence)" paidBy="Landlord" note="Clear threshold" />
        <CostRow item="Full Roof / HVAC / Structural Replacement" paidBy="Landlord" note="End-of-life replacements" />
        <CostRow item="Latent Defects" paidBy="Landlord" note="NEW exclusion: defects existing at signing" />
        <CostRow item="Pre-Existing Code Violations" paidBy="Landlord" note="NEW exclusion: not caused by your use" />
        <CostRow item="Debt Service" paidBy="Landlord" note="NEW exclusion: mortgage principal/interest" />
        <CostRow item="Leasing Commissions / TI Costs" paidBy="Landlord" note="NEW exclusion: landlord's leasing costs" />
        <CostRow item="Major Parking Repaving" paidBy="Landlord" note="Full surface repave" />
        <CostRow item="Assembly Room Event Costs" paidBy="Landlord" note="Cleaning, utilities, insurance for landlord events" />

        <Callout type="info">
          NNN expenses are billed monthly as 1/12 of the annual estimate. Reconciliation within 90 days of year-end. Controllable costs (everything except taxes, insurance, utilities, snow removal, government-imposed costs) are capped at {leaseConfig.controllableCapPercent}% year-over-year. You have audit rights — if landlord overstated by more than 3%, they pay for the audit.
        </Callout>
      </Section>

      <Section title="Capital Amortization Risk" icon="⚠️" party="tenant" tab={tab}>
        <p className="mb-2.5">
          If a major system (roof, HVAC, plumbing, electrical, structural) fails prematurely because of <strong>your negligence, improper maintenance, or misuse</strong>, the landlord can propose amortizing the replacement cost over the system&apos;s useful life. Your amortized share becomes Additional Rent.
        </p>
        <Callout type="warning">
          This can only take effect if both parties agree in writing — you can&apos;t be forced into it. But it gives the landlord leverage if you&apos;ve neglected maintenance. The best defense: keep your HVAC maintenance contract current and document all maintenance activities carefully.
        </Callout>
      </Section>

      <Section title="Security Deposit / Letter of Credit" icon="🏦" party="tenant" tab={tab}>
        <Term label="Amount" value={`${leaseConfig.securityMultiple} months (Base Rent + est. NNN)`} />
        <Term label="Form" value="Cash or irrevocable standby LOC (Exhibit I)" />
        <Term label="Due" value={`Within ${leaseConfig.securityDeliveryDays} days of signing`} />
        <Term label="Replenishment" value="15 business days after draw" />
        <Term label="Return" value="30 days after lease expiration + premises surrender" />
        <Callout type="warning">
          The landlord has broad draw rights. They can draw for: monetary defaults, non-monetary defaults, carrying costs during vacancy, re-tenanting costs (brokerage, TI concessions, free rent, legal, marketing), enforcement costs, AND failure-to-open costs. Failure to replenish after a draw is itself a monetary default.
        </Callout>
      </Section>
    </div>
  );
}
