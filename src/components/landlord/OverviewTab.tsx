import Section from "@/components/ui/Section";
import Callout from "@/components/ui/Callout";
import Term from "@/components/ui/Term";

const tab = "overview";

export default function OverviewTab() {
  return (
    <div>
      <Section title="What Is This Lease?" icon="📋" defaultOpen={true} party="landlord" tab={tab}>
        <p className="mb-2.5">
          This is a <strong>Modified Triple Net (NNN) Lease</strong> for your property at 4000 Pulaski Pike NW. The tenant pays base rent plus most operating costs — property taxes, insurance, and maintenance (including routine roof, structural, and HVAC servicing). You, as landlord, are responsible only for capital items costing $10,000 or more per occurrence and major system replacements at end of useful life.
        </p>
        <p className="mb-2.5">
          The tenant is opening a <strong>behavioral health clinic for veterans</strong> (VA Community Care Network) with 6–9 therapists and 1–2 nurse practitioners providing outpatient mental health services.
        </p>
        <Callout type="tip">
          This lease passes routine maintenance through to the tenant (roof patching, structural upkeep, HVAC servicing) while keeping capital items above $10,000 on you. It also includes an explicit &ldquo;Failure to Open&rdquo; default trigger and broad draw rights on the security deposit.
        </Callout>
      </Section>

      <Section title="The Parties" icon="🤝" party="landlord" tab={tab}>
        <Term label="Landlord" value="Bo Matthews Center of Excellence" />
        <Term label="Tenant" value="[To Be Determined]" />
        <Term label="Personal Guarantor" value="Kendall Newson" />
        <Term label="Property" value="4000 Pulaski Pike NW (~7,564 sq ft)" />
      </Section>

      <Section title="Why Is the Tenant Signing Before Renovations?" icon="🏗️" party="landlord" tab={tab}>
        <p className="mb-2.5">
          The tenant has agreed to sign before renovations begin to help you secure construction financing. A signed lease with a committed tenant is a key requirement most lenders need before approving a construction loan.
        </p>
        <Callout type="success">
          Your protections include: a Personal Guaranty from Kendall Newson (with survival clause for accrued obligations), a Letter of Credit or cash deposit, broadened draw rights covering carrying costs and re-tenanting expenses, and an explicit default trigger if the tenant fails to open for business within 90 days of delivery.
        </Callout>
      </Section>

      <Section title="Document Structure" icon="📄" party="landlord" tab={tab}>
        <p className="mb-2.5">
          The lease is organized into four parts to make it easier to navigate:
        </p>
        <div className="bg-slate-50 rounded-lg p-3.5 mb-2">
          <strong>Part I: Deal Terms</strong> — Parties, premises, term, rent, escalation, operating expenses, credit support. This is where all the business terms live.
        </div>
        <div className="bg-slate-50 rounded-lg p-3.5 mb-2">
          <strong>Part II: Delivery & Improvements</strong> — Scope of work, delivery conditions, early access, rent commencement phases, change orders.
        </div>
        <div className="bg-slate-50 rounded-lg p-3.5 mb-2">
          <strong>Part III: Occupancy & Operations</strong> — Maintenance, alterations, insurance, HIPAA, Assembly Room, parking. Day-to-day operations.
        </div>
        <div className="bg-slate-50 rounded-lg p-3.5 mb-2">
          <strong>Part IV: Legal Framework</strong> — Assignment, default/remedies, indemnity, SNDA, casualty, force majeure, notices, miscellaneous. Primarily for counsel.
        </div>
      </Section>

      <Section title="Assembly Room (Reserved-Use Rights)" icon="🏛️" party="landlord" tab={tab}>
        <p className="mb-2.5">
          You retain the right to use the Assembly Room for community events, nonprofit programming, and similar activities. Events must be scheduled with 48 hours&apos; written notice (email is sufficient) and cannot occur during clinic hours without tenant consent.
        </p>
        <p className="mb-2.5">
          You bear 100% of event costs, must carry event liability insurance naming the tenant as additional insured, and must restore the Assembly Room to pre-event condition within 24 hours. Event attendees cannot access clinical areas.
        </p>
        <Callout type="info">
          You reimburse the tenant for incremental utility costs from events within 30 days of their invoice. Prohibited activities include alcohol, controlled substances, and anything generating excessive noise or safety hazards.
        </Callout>
      </Section>
    </div>
  );
}
