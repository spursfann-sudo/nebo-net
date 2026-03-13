import Section from "@/components/ui/Section";
import Callout from "@/components/ui/Callout";
import Term from "@/components/ui/Term";
import { leaseConfig } from "@/lib/lease-config";

const tab = "overview";

export default function OverviewTab() {
  return (
    <div>
      <Section title="What Is This Lease?" icon="📋" defaultOpen={true} party="tenant" tab={tab}>
        <p className="mb-2.5">
          This is a <strong>Modified Triple Net (NNN) Lease</strong> for your behavioral health clinic at 4000 Pulaski Pike NW. You pay base rent plus most operating costs — property taxes, insurance, and maintenance (now including routine roof, structural, and HVAC servicing under $10,000). The landlord handles capital items costing $10,000+ per occurrence and major system replacements at end of life.
        </p>
        <p className="mb-2.5">
          You are signing <strong>before the building is renovated</strong>. The landlord needs a signed lease to secure financing. In exchange, you pay no rent during construction, get a 90-day transition period after delivery, and have non-exclusive early access rights to begin setup before the space is formally delivered.
        </p>
        <Callout type="tip">
          The &ldquo;modified&rdquo; part still works in your favor — in a pure NNN lease, you&apos;d cover everything including the roof and structure. Here, the landlord keeps all capital expenses above $10,000 plus latent defects and pre-existing code violations. The $10,000 threshold clearly separates what&apos;s yours (routine) from what&apos;s the landlord&apos;s (capital).
        </Callout>
      </Section>

      <Section title="The Parties" icon="🤝" party="tenant" tab={tab}>
        <Term label="Landlord" value="Bo Matthews Center of Excellence" />
        <Term label="Tenant" value="[Your Entity Name]" />
        <Term label="Guarantor" value="Kendall Newson" />
        <Term label="Property" value="4000 Pulaski Pike NW (~7,564 sq ft)" />
        <Term label="Permitted Use" value="Outpatient behavioral health clinic" />
      </Section>

      <Section title="Term Structure at a Glance" icon="📅" party="tenant" tab={tab}>
        <div className="bg-green-50 rounded-lg p-3.5 mb-2.5 border border-green-200">
          <div className="font-semibold text-sm mb-1.5 text-green-800">
            Maximum: 15 years total
          </div>
          <p className="text-[13px] text-green-800">
            Starts with a 3-year Initial Term. Then it <strong>automatically renews</strong> in 3-year increments unless you opt out by delivering a &ldquo;Notice to Quit&rdquo; at least 9 months before the current term expires. The landlord cannot block renewal as long as you&apos;re not in default.
          </p>
        </div>
        <Callout type="success">
          The auto-renewal structure protects you — you have tenure stability for up to 15 years without needing to renegotiate. This is important for building your practice, maintaining VA CCN provider status, and establishing referral relationships.
        </Callout>
      </Section>

      <Section title="What the Landlord Is Doing for You" icon="🏗️" party="tenant" tab={tab}>
        <p className="mb-2.5">
          The landlord is fully funding the renovation, including:
        </p>
        <ul className="mb-2.5 pl-5 text-[13px] leading-7 list-disc">
          <li>Full interior build-out (therapy rooms with sound attenuation, reception, admin, break room, storage, server room)</li>
          <li>HVAC sized for clinical occupancy with individual zone controls</li>
          <li>Electrical panel upgrade with dedicated medical circuits</li>
          <li>Technology infrastructure (structured cabling, data drops per office, server room cooling)</li>
          <li>ADA compliance throughout, fire/life safety systems</li>
          <li>Assembly Room with separate access controls from clinical areas</li>
          <li>Parking lot repair/striping with ADA-compliant spaces</li>
        </ul>
        <Callout type="warning">
          The detailed scope is in Schedule C-1 (the Work List). Before signing, make sure every improvement you need is explicitly listed. The lease includes a &ldquo;No Warranty&rdquo; clause — you accept the premises as-is at delivery except for the specific delivery conditions. Anything not in Schedule C-1 could be considered your responsibility.
        </Callout>
      </Section>

      <Section title="Key Lease Highlights" icon="📝" party="tenant" tab={tab}>
        <p className="mb-2.5">
          Key provisions to understand before signing:
        </p>
        <div className="bg-red-50 rounded-lg p-3.5 mb-2 border border-red-200">
          <strong className="text-red-800">Provisions to be aware of:</strong>
          <ul className="mt-1.5 pl-[18px] text-[13px] text-red-800 list-disc">
            <li>You pay routine roof, structural, and HVAC maintenance (items under $10K)</li>
            <li>FMV at renewal is the landlord&apos;s determination; you bear full arbitration costs if you dispute</li>
            <li>Failure to Open is an explicit default (not just an automatic rent trigger)</li>
            <li>Landlord&apos;s LOC draw rights cover carrying costs and re-tenanting costs</li>
            <li>Guaranty survival clause means accrued obligations survive the burn-off</li>
          </ul>
        </div>
        <div className="bg-green-50 rounded-lg p-3.5 mb-2 border border-green-200">
          <strong className="text-green-800">Provisions that protect you:</strong>
          <ul className="mt-1.5 pl-[18px] text-[13px] text-green-800 list-disc">
            <li>Clear $10,000 capital threshold protects you from surprise large charges</li>
            <li>Capital exclusions explicitly cover latent defects and pre-existing code violations</li>
            <li>Management fee capped at {leaseConfig.cap}% or ${leaseConfig.capAmount}</li>
            <li>Non-exclusive early access during pre-delivery period for setup</li>
            <li>Change order provisions give you approval rights on material scope changes</li>
            <li>Either party can record a memorandum of lease</li>
            <li>Email notification accepted for routine items</li>
          </ul>
        </div>
      </Section>
    </div>
  );
}
