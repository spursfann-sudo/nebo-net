import Section from "@/components/ui/Section";
import Callout from "@/components/ui/Callout";
import Term from "@/components/ui/Term";
import { leaseConfig } from "@/lib/lease-config";

const tab = "obligations";

export default function ObligationsTab() {
  return (
    <div>
      <Section title="What You Must Do Before Opening" icon="✅" defaultOpen={true} party="tenant" tab={tab}>
        <div className="bg-slate-50 rounded-lg p-3.5 mb-2">
          <div className="flex gap-2 mb-1">
            <span className="text-base">📄</span>
            <div>
              <div className="font-semibold text-[13px]">Security Deposit or Letter of Credit</div>
              <div className="text-xs text-slate-500">{leaseConfig.securityMultiple} months Base Rent + NNN. Cash or irrevocable standby LOC from a federally insured institution. Due within {leaseConfig.securityDeliveryDays} days of signing.</div>
            </div>
          </div>
        </div>
        <div className="bg-slate-50 rounded-lg p-3.5 mb-2">
          <div className="flex gap-2 mb-1">
            <span className="text-base">🛡️</span>
            <div>
              <div className="font-semibold text-[13px]">Personal Guaranty (Kendall Newson)</div>
              <div className="text-xs text-slate-500">Executed simultaneously with the lease. Covers all monetary obligations, failure to open, early termination, and enforcement costs.</div>
            </div>
          </div>
        </div>
        <div className="bg-slate-50 rounded-lg p-3.5 mb-2">
          <div className="flex gap-2 mb-1">
            <span className="text-base">📑</span>
            <div>
              <div className="font-semibold text-[13px]">Insurance Certificates</div>
              <div className="text-xs text-slate-500">All required policies (CGL, professional liability, umbrella, workers&apos; comp, cyber, auto, business property, business interruption) with landlord named as additional insured. Due before first access or Commencement Date.</div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Insurance You Must Carry" icon="📑" party="tenant" tab={tab}>
        <Term label="General Liability (CGL)" value="$1M / $2M aggregate" />
        <Term label="Professional Liability" value="$1M per claim / $3M aggregate" />
        <Term label="Umbrella / Excess" value="$2M per occurrence and aggregate" />
        <Term label="Workers' Comp" value="Statutory ($500K employer's liability)" />
        <Term label="Business Property" value="Replacement cost, all-risk" />
        <Term label="Business Interruption" value="12 months projected revenue" />
        <Term label="Cyber Liability" value="$1M" />
        <Term label="Commercial Auto" value="$1M CSL" />
        <div className="h-2" />
        <Callout type="info">
          CGL and umbrella must name the landlord as additional insured, be primary/non-contributory. Carrier must be A-VII+ rated with 30 days&apos; cancellation notice. All policies must include waiver of subrogation in landlord&apos;s favor.
        </Callout>
      </Section>

      <Section title="Ongoing Maintenance (Expanded in v2)" icon="🔧" party="tenant" tab={tab}>
        <p className="mb-2.5">
          V2 expands your maintenance responsibilities to include routine roof, structural, and HVAC items under $10,000:
        </p>
        <ul className="mb-2.5 pl-5 text-[13px] leading-7 list-disc">
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

      <Section title="Personal Guaranty Details" icon="✍️" party="tenant" tab={tab}>
        <div className="bg-red-50 rounded-lg p-3.5 mb-2.5 border border-red-200">
          <div className="font-semibold text-sm mb-1.5 text-red-800">
            What&apos;s Guaranteed
          </div>
          <ul className="pl-[18px] text-[13px] text-red-800 leading-7 list-disc">
            <li>All monetary obligations during the guaranty period</li>
            <li>The obligation to actually open for business after renovations</li>
            <li>Early termination or default damages</li>
            <li>Landlord&apos;s enforcement costs (attorneys&apos; fees, court costs)</li>
          </ul>
        </div>
        <div className="bg-green-50 rounded-lg p-3.5 mb-2.5 border border-green-200">
          <div className="font-semibold text-sm mb-1.5 text-green-800">
            The Burn-Off (How It Ends)
          </div>
          <p className="text-[13px] text-green-800">
            After <strong>36 consecutive months of on-time rent payments</strong> (received by the 5th of the month) from Phase 3 commencement, the guaranty terminates. One late payment resets the clock to zero.
          </p>
        </div>
        <div className="bg-blue-50 rounded-lg p-3.5 mb-2.5 border border-blue-200">
          <div className="font-semibold text-sm mb-1.5 text-blue-800">
            New in v2: Survival Clause
          </div>
          <p className="text-[13px] text-blue-800">
            Even after burn-off, the guaranty <strong>survives for obligations that accrued before the burn-off date</strong>. This means unpaid rent, outstanding NNN reconciliation amounts, or unreimbursed costs from the guaranty period can still be pursued against Kendall Newson personally, regardless of when the landlord makes the demand.
          </p>
        </div>
        <Callout type="warning">
          There is no dollar cap on the personal guaranty. The landlord can pursue Kendall Newson directly without suing the tenant entity first. Take the 36-month period seriously — one late payment resets the entire clock. And make sure all reconciliation amounts from the guaranty period are settled promptly.
        </Callout>
      </Section>

      <Section title="Licensing and Compliance (All on You)" icon="⚕️" party="tenant" tab={tab}>
        <ul className="mb-2.5 pl-5 text-[13px] leading-7 list-disc">
          <li>Alabama behavioral health facility licensing</li>
          <li>VA CCN provider credentialing and enrollment</li>
          <li>DEA registration (if prescribing controlled substances)</li>
          <li>HIPAA compliance (policies, procedures, safeguards)</li>
          <li>Pharmaceutical and medical waste disposal (sole responsibility, with indemnification to landlord)</li>
          <li>Individual provider licensure for all therapists and NPs</li>
        </ul>
      </Section>

      <Section title="At Lease End: Surrender Requirements" icon="🚚" party="tenant" tab={tab}>
        <ul className="mb-2.5 pl-5 text-[13px] leading-7 list-disc">
          <li>Return premises in Commencement Date condition (reasonable wear and tear excepted)</li>
          <li>Remove all personal property, trade fixtures, clinical equipment, signage</li>
          <li>Repair any damage caused by removal</li>
          <li><strong>Remove or securely destroy all PHI and patient records</strong> per HIPAA</li>
          <li>Landlord may elect in writing to retain any of your alterations</li>
        </ul>
      </Section>
    </div>
  );
}
