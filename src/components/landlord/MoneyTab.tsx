import Section from "@/components/ui/Section";
import Callout from "@/components/ui/Callout";
import Term from "@/components/ui/Term";
import PhaseCard from "@/components/ui/PhaseCard";
import { leaseConfig } from "@/lib/lease-config";

const tab = "money";

export default function MoneyTab() {
  return (
    <div>
      <Section title="How Rent Works (Three Phases)" icon="💰" defaultOpen={true} party="landlord" tab={tab}>
        <p className="mb-3">
          Rent phases in over time to account for renovation and tenant setup:
        </p>

        <PhaseCard phase="PHASE 1" title="Construction Period" subtitle="Effective Date through Delivery Date" color="#ef4444">
          <strong>You receive: Nothing.</strong> Both base rent and NNN expenses are fully waived while you renovate. The tenant does have non-exclusive early access rights near the end of this period (Article 8) for setup activities, but early access does not trigger rent.
        </PhaseCard>

        <PhaseCard phase="PHASE 2" title="NNN-Only Transition" subtitle="Delivery Date through opening or 90 days (whichever is first)" color="#f59e0b">
          <strong>You receive: NNN expenses only</strong> (taxes, insurance, routine maintenance). No base rent. This 90-day window lets the tenant complete fit-out, obtain licenses, credential with the VA, and prepare to see patients.
        </PhaseCard>

        <PhaseCard phase="PHASE 3" title="Full Rent" subtitle="Tenant opens or 90 days post-delivery (the Outside Opening Date)" color="#22c55e">
          <strong>You receive: Base Rent + NNN expenses.</strong> Full payments begin. If the tenant hasn&apos;t opened by the Outside Opening Date, rent starts automatically AND the tenant is in default under Section 18.1(f).
        </PhaseCard>

        <Callout type="success">
          The &ldquo;Failure to Open&rdquo; default is your strongest protection. If the tenant hasn&apos;t opened by the 90-day mark, you can: terminate on 10 days&apos; notice, draw on the Security for carrying and re-tenanting costs, and recover damages including unamortized Landlord Improvement costs.
        </Callout>
      </Section>

      <Section title="Base Rent" icon="🏠" party="landlord" tab={tab}>
        <Term label="Amount" value={`$${leaseConfig.amount} per sq ft per year`} />
        <Term label="Monthly Payment" value={`$${leaseConfig.monthlyAmount} / month`} />
        <Term label="Starts" value="Phase 3 (opening or Outside Opening Date)" />
        <Term label="Payment" value="1st of each month, in advance" />
        <Term label="Anti-Setoff" value="No offset, setoff, counterclaim, or deduction (except cure-and-offset right)" />
      </Section>

      <Section title="Rent Increases Over Time" icon="📈" party="landlord" tab={tab}>
        <div className="bg-slate-50 rounded-lg p-3.5 mb-2.5">
          <div className="font-semibold text-sm mb-1.5">During Each Term: Annual Escalation</div>
          <p className="text-[13px]">
            Every year on the Commencement Date anniversary, rent increases by {leaseConfig.escalationPercent}%. You can waive this increase in any given year without losing the right to apply it later. If you waive, the next year&apos;s escalation is calculated on the rent as last increased (no compounding through waived years).
          </p>
        </div>
        <div className="bg-slate-50 rounded-lg p-3.5 mb-2.5">
          <div className="font-semibold text-sm mb-1.5">At Each Renewal: Fair Market Value Reset</div>
          <p className="text-[13px]">
            When the lease auto-renews every 3 years, you set the base rent to Fair Market Value in your reasonable discretion, subject to a 1% floor and 4% cap over the outgoing rate. You deliver your proposed rent 120 days before the renewal starts. If the tenant disputes it, they can invoke three-appraiser arbitration — but the tenant bears the full cost of all three appraisers.
          </p>
        </div>
        <Callout type="tip">
          This is a significant advantage for you. You set the FMV rate in your reasonable discretion, and the tenant bears all arbitration costs if they want to challenge it. The 1%–4% band still applies either way.
        </Callout>
      </Section>

      <Section title="What the Tenant Pays Beyond Base Rent (NNN)" icon="📊" party="landlord" tab={tab}>
        <p className="mb-2.5">
          The tenant reimburses you 100% for operating costs. Here&apos;s what&apos;s included:
        </p>
        <Term label="Property Taxes" value="100% Tenant" />
        <Term label="Building Insurance" value="100% Tenant" />
        <Term label="Routine Roof Maintenance" value="100% Tenant (patching, gutters, flashing, minor membrane repair < $10K)" />
        <Term label="Routine Structural Maintenance" value="100% Tenant (tuckpointing, caulking, crack repair < $10K)" />
        <Term label="Routine HVAC Maintenance" value="100% Tenant (filters, coils, refrigerant, belts, PM contracts < $10K)" />
        <Term label="Landscaping, Pest Control, Trash" value="100% Tenant" />
        <Term label="Parking Lot Patching & Striping" value="100% Tenant" />
        <Term label="Fire/Life-Safety Inspections" value="100% Tenant" />
        <Term label="Management/Admin Fee" value={`100% Tenant (capped at ${leaseConfig.cap}% or $${leaseConfig.capAmount}, whichever is less)`} />
        <Term label="Utilities" value="100% Tenant (direct contracts)" />
        <div className="h-2" />
        <Callout type="info">
          Controllable Operating Costs (everything except taxes, insurance, utilities, snow removal, and government-imposed costs) are capped at {leaseConfig.controllableCapPercent}% year-over-year increase. The tenant pays estimated monthly amounts and you reconcile actual costs within 90 days of year-end. The tenant has audit rights — if they find you overstated by more than 3%, you pay for the audit.
        </Callout>
      </Section>

      <Section title="Security Deposit / Letter of Credit" icon="🔒" party="landlord" tab={tab}>
        <Term label="Amount" value={`${leaseConfig.securityMultiple} months Base Rent + NNN`} />
        <Term label="Form" value="Cash deposit or irrevocable standby LOC (Exhibit I)" />
        <Term label="When Due" value={`Within ${leaseConfig.securityDeliveryDays} days of signing`} />
        <Term label="Replenishment" value="15 business days after draw" />
        <Term label="Return" value="30 days after lease expiration + premises surrender" />
        <p className="mt-2.5 text-[13px]">
          <strong>Broad draw rights:</strong> You can draw for monetary defaults, non-monetary defaults, carrying costs during vacancy (taxes, insurance, utilities, maintenance), re-tenanting costs (brokerage, TI concessions, free rent, legal, marketing), enforcement costs, and failure-to-open costs. Failure to replenish after a draw is itself a monetary default.
        </p>
      </Section>
    </div>
  );
}
