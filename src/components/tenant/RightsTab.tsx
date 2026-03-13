import Section from "@/components/ui/Section";
import Callout from "@/components/ui/Callout";
import { leaseConfig } from "@/lib/lease-config";

const tab = "rights";

export default function RightsTab() {
  return (
    <div>
      <Section title="Your Right to Stay (Automatic Renewal)" icon="🏠" defaultOpen={true} party="tenant" tab={tab}>
        <p className="mb-2.5">
          This lease automatically renews every 3 years unless you send a Notice to Quit at least 9 months before the current term expires. The landlord cannot block renewal as long as you&apos;re not in default.
        </p>
        <div className="bg-green-50 rounded-lg p-3.5 mb-2.5 border border-green-200">
          <div className="font-semibold text-sm mb-1.5 text-green-800">
            Renewal Timeline
          </div>
          <div className="text-[13px] text-green-800">
            <div className="mb-1">Initial Term: Years 0–3</div>
            <div className="mb-1">First Renewal: Years 3–6 (auto, unless you quit by month 27)</div>
            <div className="mb-1">Second Renewal: Years 6–9 (auto, unless you quit by month 63)</div>
            <div className="mb-1">Third Renewal: Years 9–12 (auto)</div>
            <div>Fourth Renewal: Years 12–15 (auto; final — 15 year maximum)</div>
          </div>
        </div>
      </Section>

      <Section title="Early Access Rights" icon="🔑" party="tenant" tab={tab}>
        <p className="mb-2.5">
          After the landlord delivers the Anticipated Delivery Notice (about 90 days before expected completion), you have <strong>non-exclusive access</strong> for:
        </p>
        <ul className="mb-2.5 pl-5 text-[13px] leading-7 list-disc">
          <li>Furniture, fixtures, and equipment installation</li>
          <li>Technology and cabling setup</li>
          <li>State licensing inspections</li>
          <li>Staff orientation and training</li>
        </ul>
        <Callout type="success">
          This early access does NOT trigger rent or the Commencement Date. You&apos;re getting setup time before the formal delivery. But you must carry insurance, follow the general contractor&apos;s site rules, not interfere with construction, and repair any damage you cause.
        </Callout>
      </Section>

      <Section title="Patient Privacy Protections (HIPAA)" icon="🔐" party="tenant" tab={tab}>
        <p className="mb-2.5">
          Strong protections for your patients&apos; privacy and your HIPAA compliance:
        </p>
        <ul className="mb-2.5 pl-5 text-[13px] leading-7 list-disc">
          <li>Landlord must give 24 hours&apos; written notice before entering during clinic hours</li>
          <li>No landlord access to patient care areas during active therapy sessions (except emergencies)</li>
          <li>Landlord must follow your access protocols (sign-in, visual privacy safeguards)</li>
          <li>During Assembly Room events, clinical areas must be physically secured</li>
          <li>Soundproofing in therapy rooms is part of the landlord&apos;s renovation scope</li>
        </ul>
        <Callout type="tip">
          Establish your access protocols early and put them in writing. The lease gives you the right to set the rules for how the landlord enters during business hours.
        </Callout>
      </Section>

      <Section title="Change Order Rights" icon="📝" party="tenant" tab={tab}>
        <p className="mb-2.5">
          If the landlord needs to change the renovation scope due to field conditions or code requirements and the change materially alters the scope or delays delivery by more than {leaseConfig.threshold} days, you can <strong>approve or reject</strong> within 5 business days.
        </p>
        <p className="mb-2.5">
          You can also request changes to the scope of work — but any cost increase from your requests is at your expense, and the landlord must approve in writing. All change orders are documented and signed by both parties.
        </p>
      </Section>

      <Section title="Walk-Away Right If Delivery Is Late" icon="🚪" party="tenant" tab={tab}>
        <p className="mb-2.5">
          If the landlord doesn&apos;t deliver by the Outside Delivery Date ({leaseConfig.outsideDeliveryMonths} months after signing), you can terminate with 30 days&apos; notice. Upon termination: Security returned within 15 business days, Guaranty terminates, neither party has further liability except surviving obligations.
        </p>
        <Callout type="warning">
          The deadline extends for Tenant Delay and Force Majeure. Respond promptly to all landlord requests for design input or approvals — any delay attributable to you extends the landlord&apos;s deadline.
        </Callout>
      </Section>

      <Section title="Audit Rights (NNN Expenses)" icon="🔍" party="tenant" tab={tab}>
        <p className="mb-2.5">
          You can audit the landlord&apos;s records upon 10 business days&apos; notice. Landlord keeps records for 3 years. If the audit shows overstatement exceeding 3%, the landlord pays for the audit and refunds the overcharge.
        </p>
        <Callout type="success">
          With routine roof, structural, and HVAC costs included in your operating expenses, your audit rights are especially important. Make sure the landlord is properly distinguishing routine items (your cost) from capital items over $10,000 (their cost).
        </Callout>
      </Section>

      <Section title="Assignment and Subletting" icon="🔄" party="tenant" tab={tab}>
        <p className="mb-2.5">
          Landlord consent required (not unreasonably withheld), except for three categories of <strong>Permitted Transfers</strong> that need no consent:
        </p>
        <ul className="mb-2.5 pl-5 text-[13px] leading-7 list-disc">
          <li><strong>Affiliate transfers:</strong> Moving the lease to an entity you control</li>
          <li><strong>Mergers/reorganizations:</strong> Selling your practice through a merger, if the buyer has comparable creditworthiness</li>
          <li><strong>Behavioral health subtenants:</strong> Subletting individual offices to licensed behavioral health providers for clinical use</li>
        </ul>
        <Callout type="tip">
          The ability to sublet offices to licensed therapists without landlord consent gives you flexibility to bring in independent contractors or fill unused offices with other behavioral health providers.
        </Callout>
      </Section>

      <Section title="Landlord Default: Your Remedies" icon="⚖️" party="tenant" tab={tab}>
        <p className="mb-2.5">
          If the landlord fails to perform a material obligation (e.g., doesn&apos;t make a required capital repair):
        </p>
        <ul className="mb-2.5 pl-5 text-[13px] leading-7 list-disc">
          <li>Send written notice specifying the default</li>
          <li>Landlord has 30 days to cure (or longer if diligently prosecuting)</li>
          <li>If still uncured and it materially impairs your use or threatens health/safety, send a second 15-day notice</li>
          <li>Then you can cure it yourself and offset documented costs against Base Rent over up to 12 months</li>
        </ul>
        <Callout type="success">
          The cure-and-offset right is valuable. If the roof is leaking and the landlord won&apos;t fix it, you&apos;re not helpless — fix it, document costs, and deduct from rent over the following year.
        </Callout>
      </Section>

      <Section title="Non-Disturbance (SNDA)" icon="🏦" party="tenant" tab={tab}>
        <p className="mb-2.5">
          The landlord is getting a construction loan. Your lease will be subordinate to that mortgage, but the landlord must obtain an SNDA from their lender. This means if the landlord defaults on the loan and the bank forecloses, <strong>your lease survives</strong> — you can keep operating your clinic.
        </p>
        <Callout type="warning">
          Follow up to confirm you actually receive the SNDA. If the landlord fails to deliver within 60 days of your request, the lease becomes superior to the lien automatically until delivered. But getting it proactively is much better than relying on that fallback.
        </Callout>
      </Section>

      <Section title="Memorandum of Lease" icon="📄" party="tenant" tab={tab}>
        <p className="mb-2.5">
          Either party can record a short-form memorandum of the lease in the Madison County records. It identifies the parties, premises, and term but omits financial terms. The other party must cooperate within 15 business days.
        </p>
        <Callout type="info">
          Recording a memorandum gives public notice that your lease exists. This can be useful for your business credibility and helps protect your interest against subsequent buyers who might claim they didn&apos;t know about your lease.
        </Callout>
      </Section>
    </div>
  );
}
