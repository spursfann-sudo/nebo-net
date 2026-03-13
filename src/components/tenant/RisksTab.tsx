import Section from "@/components/ui/Section";
import Callout from "@/components/ui/Callout";
import Term from "@/components/ui/Term";
import { leaseConfig } from "@/lib/lease-config";

const tab = "risks";

export default function RisksTab() {
  return (
    <div>
      <Section title="Your Biggest Risk: The 90-Day Outside Opening Date" icon="⏱️" defaultOpen={true} party="tenant" tab={tab}>
        <p className="mb-2.5">
          Full rent starts 90 days after delivery, whether or not you&apos;ve opened. In v2, this is now also an <strong>explicit default trigger</strong>. If you haven&apos;t opened, haven&apos;t been diligently preparing, or refuse to accept possession:
        </p>
        <ul className="mb-2.5 pl-5 text-[13px] list-disc">
          <li className="mb-1">Full Base Rent + Additional Rent become due regardless</li>
          <li className="mb-1">Landlord can terminate the lease on 10 days&apos; notice</li>
          <li className="mb-1">Landlord can draw on your Security for carrying costs and re-tenanting costs</li>
          <li className="mb-1">Landlord can recover damages including unamortized Landlord Improvement costs</li>
          <li className="mb-1">Personal guarantor (Kendall Newson) is exposed</li>
        </ul>
        <Callout type="action">
          Before signing, realistically assess: (1) VA CCN enrollment timeline, (2) insurance panel credentialing per provider, (3) equipment procurement and install, (4) EHR setup and testing, (5) staff hiring. If any could push past 90 days, negotiate a longer transition or discuss this risk explicitly.
        </Callout>
      </Section>

      <Section title="Construction Delays" icon="🏗️" party="tenant" tab={tab}>
        <p className="mb-2.5">
          You&apos;re signing before renovations. Your protection is the Outside Delivery Date — if the landlord misses it (as extended by Force Majeure and Tenant Delay), you can walk away within 30 days. Security returned, Guaranty terminates, no further liability.
        </p>
        <Callout type="warning">
          Respond quickly and in writing to all landlord requests during construction. Any delay attributable to you extends the landlord&apos;s deadline and pushes back your termination right. V2 adds a Change Order process — engage with it promptly.
        </Callout>
      </Section>

      <Section title="Broader LOC Draw Rights" icon="💳" party="tenant" tab={tab}>
        <p className="mb-2.5">
          V2 significantly broadens what the landlord can draw your security deposit for:
        </p>
        <ul className="mb-2.5 pl-5 text-[13px] leading-7 list-disc">
          <li>Monetary and non-monetary defaults (same as v1)</li>
          <li><strong>Carrying costs</strong> — taxes, insurance, utilities, maintenance during vacancy caused by your default</li>
          <li><strong>Re-tenanting costs</strong> — brokerage commissions, TI concessions, free rent for new tenant, legal fees, marketing</li>
          <li>Enforcement costs (attorneys&apos; fees, court costs)</li>
          <li>Failure-to-open costs</li>
        </ul>
        <Callout type="warning">
          Re-tenanting costs can be substantial — the landlord could draw your entire deposit to cover brokerage and concessions for a replacement tenant. Make sure you understand the full exposure and factor it into your decision-making.
        </Callout>
      </Section>

      <Section title="What Happens If You Default" icon="⚠️" party="tenant" tab={tab}>
        <div className="bg-slate-50 rounded-lg p-3.5 mb-2">
          <div className="font-semibold text-[13px] text-red-600 mb-1">Missed Rent</div>
          <div className="text-[13px]">5 business days to cure after notice. If not cured: default. Landlord can terminate, draw on Security, accelerate rent, pursue guarantor, sue for damages. Remedies are cumulative.</div>
        </div>
        <div className="bg-slate-50 rounded-lg p-3.5 mb-2">
          <div className="font-semibold text-[13px] text-red-600 mb-1">Failed to Maintain Security</div>
          <div className="text-[13px]">15 business days to replenish after notice. Failure is a monetary default.</div>
        </div>
        <div className="bg-slate-50 rounded-lg p-3.5 mb-2">
          <div className="font-semibold text-[13px] text-red-600 mb-1">Other Breaches</div>
          <div className="text-[13px]">30-day cure period (90 days if diligently prosecuting). Examples: HVAC contract lapse, unauthorized alterations, use violations.</div>
        </div>
        <div className="bg-slate-50 rounded-lg p-3.5 mb-2">
          <div className="font-semibold text-[13px] text-red-600 mb-1">Abandonment</div>
          <div className="text-[13px]">30+ consecutive days without landlord consent.</div>
        </div>
        <div className="bg-slate-50 rounded-lg p-3.5 mb-2">
          <div className="font-semibold text-[13px] text-red-600 mb-1">Bankruptcy</div>
          <div className="text-[13px]">Filing not dismissed within 60 days.</div>
        </div>
        <div className="bg-red-50 rounded-lg p-3.5 mb-2 border border-red-200">
          <div className="font-semibold text-[13px] text-red-800 mb-1">Failure to Open (NEW in v2)</div>
          <div className="text-[13px] text-red-800">Not open by Outside Opening Date (90 days post-delivery), not diligently preparing, or refusing possession. Landlord can terminate on 10 days&apos; notice, draw Security for carrying/re-tenanting costs, recover damages including unamortized Landlord Improvement costs.</div>
        </div>
      </Section>

      <Section title="How to Exit This Lease" icon="🚪" party="tenant" tab={tab}>
        <div className="bg-slate-50 rounded-lg p-3.5 mb-2">
          <div className="font-semibold text-sm mb-1">Opt Out of Renewal</div>
          <div className="text-[13px]">Send a Notice to Quit at least 9 months before any term expires. Lease ends at expiration. No penalty.</div>
        </div>
        <div className="bg-slate-50 rounded-lg p-3.5 mb-2">
          <div className="font-semibold text-sm mb-1">Landlord Fails to Deliver</div>
          <div className="text-[13px]">If building isn&apos;t delivered by Outside Delivery Date, you can terminate within 30 days. Security returned, Guaranty terminates.</div>
        </div>
        <div className="bg-slate-50 rounded-lg p-3.5 mb-2">
          <div className="font-semibold text-sm mb-1">Casualty (Fire/Disaster)</div>
          <div className="text-[13px]">If estimated repair exceeds 180 days, either party can terminate on 30 days&apos; notice. Rent abates during restoration.</div>
        </div>
        <div className="bg-slate-50 rounded-lg p-3.5 mb-2">
          <div className="font-semibold text-sm mb-1">Condemnation</div>
          <div className="text-[13px]">If a material portion taken so you can&apos;t reasonably operate, either party can terminate. You pursue your own condemnation claim.</div>
        </div>
        <div className="bg-red-50 rounded-lg p-3.5 mb-2 border border-red-200">
          <div className="font-semibold text-sm mb-1 text-red-800">Early Termination (Walking Away)</div>
          <div className="text-[13px] text-red-800">There is no early termination option. If you leave before a term ends, the landlord can pursue remaining rent and damages. During the guaranty period, Kendall Newson is personally liable. The landlord can also accelerate all remaining rent (discounted to present value).</div>
        </div>
        <Callout type="tip">
          If you want an early termination right (&ldquo;kick-out clause&rdquo;), you&apos;d need to negotiate that specifically — typically a termination fee equal to several months&apos; rent plus unamortized Landlord Improvement costs. This is not currently in the draft.
        </Callout>
      </Section>

      <Section title="Key Dates to Calendar" icon="📅" party="tenant" tab={tab}>
        <div className="bg-slate-50 rounded-lg p-3.5">
          <Term label="Security Due" value={`${leaseConfig.securityDeliveryDays} days after signing`} />
          <Term label="Outside Delivery Date" value={`${leaseConfig.outsideDeliveryMonths} months after signing`} />
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
  );
}
