import Section from "@/components/ui/Section";
import Callout from "@/components/ui/Callout";
import Term from "@/components/ui/Term";

const tab = "protection";

export default function ProtectionsTab() {
  return (
    <div>
      <Section title="Personal Guaranty (Kendall Newson)" icon="🛡️" defaultOpen={true} party="landlord" tab={tab}>
        <p className="mb-2.5">
          Kendall Newson personally guarantees all tenant obligations. If the tenant entity can&apos;t or won&apos;t pay, you can pursue Kendall Newson personally — directly, without suing the tenant entity first.
        </p>
        <p className="mb-2.5">
          <strong>What it covers:</strong>
        </p>
        <ul className="mb-2.5 pl-5 text-[13px] list-disc">
          <li className="mb-1">All monetary obligations during the guaranty period</li>
          <li className="mb-1">Tenant refuses to move in after renovations (failure to open)</li>
          <li className="mb-1">Early termination or default damages</li>
          <li className="mb-1">Enforcement costs including attorneys&apos; fees</li>
        </ul>

        <div className="bg-amber-50 rounded-lg p-3.5 mt-3 border border-amber-200">
          <div className="font-semibold text-sm mb-1.5 text-amber-800">
            Burn-Off: When the Guaranty Expires
          </div>
          <p className="text-[13px] text-amber-900">
            The guaranty terminates after the tenant makes <strong>36 consecutive months</strong> of on-time payments (received by the 5th of the month) starting from Phase 3 commencement. One late payment resets the clock to zero.
          </p>
        </div>

        <div className="bg-blue-50 rounded-lg p-3.5 mt-2.5 border border-blue-200">
          <div className="font-semibold text-sm mb-1.5 text-blue-800">
            New in v2: Survival Clause
          </div>
          <p className="text-[13px] text-blue-800">
            Even after the guaranty burns off, it <strong>survives for all obligations that accrued before the burn-off date</strong> — unpaid rent, outstanding reconciliation amounts, and unreimbursed costs. This means if the tenant owes money from the guaranty period that hasn&apos;t been collected yet, Kendall Newson remains on the hook for those specific amounts regardless of when you pursue them.
          </p>
        </div>
      </Section>

      <Section title="Failure to Open Default (New in v2)" icon="🚪" party="landlord" tab={tab}>
        <p className="mb-2.5">
          If the tenant hasn&apos;t opened for business by the Outside Opening Date (90 days after delivery), hasn&apos;t been diligently preparing, or refuses to accept possession, the tenant is in default. Your remedies include:
        </p>
        <ul className="mb-2.5 pl-5 text-[13px] list-disc">
          <li className="mb-1">Terminate the lease on 10 days&apos; written notice</li>
          <li className="mb-1">Draw on the Security for carrying costs and re-tenanting costs</li>
          <li className="mb-1">Recover damages including brokerage commissions and unamortized Landlord Improvement costs</li>
          <li className="mb-1">Pursue the personal guarantor directly</li>
        </ul>
        <Callout type="success">
          This is a major addition from v1, where the only consequence of the tenant not opening was that full rent kicked in automatically. Now you have an explicit termination right and expanded damage recovery if the tenant fails to open.
        </Callout>
      </Section>

      <Section title="What If the Tenant Defaults?" icon="⚠️" party="landlord" tab={tab}>
        <div className="bg-slate-50 rounded-lg p-3.5 mb-2">
          <strong>Missed Rent:</strong> Written notice, 5 business days to cure. If not cured: terminate, re-enter, draw on Security, accelerate rent, pursue guarantor, sue for damages. Remedies are cumulative.
        </div>
        <div className="bg-slate-50 rounded-lg p-3.5 mb-2">
          <strong>Failed to Maintain Security:</strong> 15 business days to replenish after notice. Failure is a monetary default.
        </div>
        <div className="bg-slate-50 rounded-lg p-3.5 mb-2">
          <strong>Other Breaches:</strong> 30-day cure period (or 90 days if diligently prosecuting). Examples: HVAC contract lapse, unauthorized alterations, use violations.
        </div>
        <div className="bg-slate-50 rounded-lg p-3.5 mb-2">
          <strong>Abandonment:</strong> 30+ consecutive days without your consent.
        </div>
        <div className="bg-slate-50 rounded-lg p-3.5 mb-2">
          <strong>Bankruptcy:</strong> Filing not dismissed within 60 days.
        </div>
        <div className="bg-slate-50 rounded-lg p-3.5 mb-2">
          <strong>Failure to Open:</strong> Not open by Outside Opening Date (90 days post-delivery). Termination on 10 days&apos; notice.
        </div>
      </Section>

      <Section title="SNDA (Protecting Your Financing)" icon="🏦" party="landlord" tab={tab}>
        <p className="mb-2.5">
          Your lender will need the lease subordinate to the mortgage. The SNDA protects both sides:
        </p>
        <ul className="mb-2.5 pl-5 text-[13px] list-disc">
          <li className="mb-1"><strong>Subordination:</strong> Lease ranks below the mortgage (your lender requires this)</li>
          <li className="mb-1"><strong>Non-Disturbance:</strong> If you default on the loan, the tenant&apos;s lease survives foreclosure</li>
          <li className="mb-1"><strong>Attornment:</strong> Tenant agrees to pay rent to the new owner after foreclosure</li>
        </ul>
        <Callout type="warning">
          You must use commercially reasonable efforts to obtain an SNDA from your lender within 30 days of closing financing. If you fail to deliver within 60 days of tenant&apos;s request, the lease becomes superior to the lien until delivered. Estoppel certificates from the tenant are available within 10 business days of your request.
        </Callout>
      </Section>

      <Section title="Memorandum of Lease (New in v2)" icon="📝" party="landlord" tab={tab}>
        <p className="mb-2.5">
          Either party can record a short-form memorandum of the lease in the Madison County real property records. The memorandum identifies the parties, premises, and term (including renewal rights) but omits financial terms. Both parties must cooperate within 15 business days.
        </p>
        <Callout type="info">
          This is useful for your financing — a recorded memorandum gives constructive notice to future buyers and lenders that the tenant&apos;s lease exists, which supports the value of the property.
        </Callout>
      </Section>

      <Section title="Insurance the Tenant Must Carry" icon="📑" party="landlord" tab={tab}>
        <Term label="General Liability" value="$1M / $2M aggregate" />
        <Term label="Professional Liability" value="$1M per claim / $3M aggregate" />
        <Term label="Umbrella/Excess" value="$2M per occurrence and aggregate" />
        <Term label="Workers' Comp" value="Statutory ($500K employer's liability)" />
        <Term label="Business Property" value="Replacement cost, all-risk" />
        <Term label="Business Interruption" value="12 months projected revenue" />
        <Term label="Cyber Liability" value="$1M (HIPAA/patient data)" />
        <Term label="Commercial Auto" value="$1M CSL" />
        <p className="mt-2.5 text-[13px]">
          You are named as additional insured on all liability policies. Coverage is primary and non-contributory — the tenant&apos;s insurance pays first. Carrier must be A-VII+ rated with 30 days&apos; cancellation notice. All policies include waiver of subrogation in your favor.
        </p>
      </Section>

      <Section title="Holdover" icon="⏰" party="landlord" tab={tab}>
        <Term label="Holdover Rent" value="150% of final Base Rent + Additional Rent" />
        <Term label="Termination" value="30 days' written notice" />
        <p className="mt-2.5 text-[13px]">
          Holdover creates a month-to-month tenancy at 150% of base rent. The tenant indemnifies you for all holdover damages, including claims from succeeding tenants. Holdover is not an extension or renewal.
        </p>
      </Section>
    </div>
  );
}
