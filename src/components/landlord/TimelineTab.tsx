import Section from "@/components/ui/Section";
import Callout from "@/components/ui/Callout";
import Term from "@/components/ui/Term";
import { leaseConfig } from "@/lib/lease-config";

const tab = "timeline";

const timelineItems = [
  { dot: "#6366f1", title: "Lease Signed (Effective Date)", desc: "Both parties execute. Guaranty and Security delivered. You take this to your lender to secure renovation financing." },
  { dot: "#ef4444", title: "Phase 1: Construction", desc: "You renovate. No rent owed. Tenant may have early access near end of this phase for setup activities (Article 8) — no rent triggered." },
  { dot: "#f59e0b", title: "Delivery Date = Commencement Date", desc: "You deliver with certificate of occupancy. Tenant inspects and submits punchlist within 10 business days. Phase 2 begins." },
  { dot: "#f59e0b", title: "Phase 2: NNN-Only Transition (up to 90 days)", desc: "Tenant pays NNN expenses only. They're setting up the clinic, credentialing, and hiring. No base rent yet." },
  { dot: "#22c55e", title: "Phase 3: Full Rent + Outside Opening Date", desc: "Tenant opens (or 90 days after delivery). Full rent begins. If tenant hasn't opened, they're also in default under the Failure to Open provision." },
  { dot: "#22c55e", title: "Annual Escalations", desc: `Each year on the Commencement Date anniversary, base rent increases by ${leaseConfig.escalationPercent}%. You can waive in any given year.` },
  { dot: "#3b82f6", title: "Year 3: End of Initial Term", desc: "Lease auto-renews for another 3 years unless tenant delivered Notice to Quit 9+ months earlier. Base rent resets to FMV (your determination, 1%–4% band). Tenant can arbitrate at their cost." },
  { dot: "#3b82f6", title: "Year 3: Guaranty Burn-Off (if on track)", desc: "If tenant paid on time for 36 consecutive months from Phase 3, guaranty expires — but survives for any obligations that accrued during the guaranty period." },
  { dot: "#3b82f6", title: "Years 6, 9, 12: Subsequent Renewals", desc: "Same auto-renewal pattern with FMV reset. Tenant can opt out with 9 months' notice each time." },
  { dot: "#8b5cf6", title: "Year 15: Maximum Term Expires", desc: "Lease cannot extend beyond 15 years. Either party can record a memorandum of lease in the public records." },
];

export default function TimelineTab() {
  return (
    <div>
      <Section title="Lease Lifecycle" icon="📅" defaultOpen={true} party="landlord" tab={tab}>
        <div className="relative pl-6">
          {timelineItems.map((item, i) => (
            <div key={i} className="relative pb-5 pl-4">
              <div
                className="absolute -left-6 top-1 w-3 h-3 rounded-full border-2 border-white z-10"
                style={{
                  background: item.dot,
                  boxShadow: `0 0 0 2px ${item.dot}40`,
                }}
              />
              {i < timelineItems.length - 1 && (
                <div
                  className="absolute -left-[19px] top-[18px] w-0.5 bg-slate-200"
                  style={{ height: "calc(100% - 10px)" }}
                />
              )}
              <div className="font-semibold text-sm mb-0.5">{item.title}</div>
              <div className="text-[13px] text-slate-600">{item.desc}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Key Deadlines to Track" icon="⏳" party="landlord" tab={tab}>
        <div className="bg-slate-50 rounded-lg p-3.5">
          <Term label="Outside Delivery Date" value={`${leaseConfig.outsideDeliveryMonths} months after signing`} />
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

      <Section title="What Happens If You Miss the Delivery Date?" icon="🚧" party="landlord" tab={tab}>
        <p className="mb-2.5">
          If you don&apos;t deliver by the Outside Delivery Date (as extended by Force Majeure and Tenant Delay):
        </p>
        <ul className="mb-2.5 pl-5 text-[13px] list-disc leading-7">
          <li>Tenant can terminate within 30 days&apos; written notice</li>
          <li>If tenant terminates: you return the Security within 15 business days, the guaranty terminates, and neither party has further liability except surviving obligations</li>
          <li>If tenant doesn&apos;t terminate, you continue working toward delivery</li>
          <li>The deadline extends day-for-day for Tenant Delay and Force Majeure</li>
        </ul>
        <Callout type="warning">
          This is your biggest risk item. If renovations run significantly over schedule and the tenant walks, you&apos;ll have a renovated building without a tenant. Set the Outside Delivery Date with adequate buffer and keep the tenant informed of progress.
        </Callout>
      </Section>
    </div>
  );
}
