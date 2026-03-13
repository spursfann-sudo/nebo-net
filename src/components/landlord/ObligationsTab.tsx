import Section from "@/components/ui/Section";
import Callout from "@/components/ui/Callout";
import { leaseConfig } from "@/lib/lease-config";

const tab = "obligations";

export default function ObligationsTab() {
  return (
    <div>
      <Section title="What You're Responsible For (Capital Items)" icon="🔧" defaultOpen={true} party="landlord" tab={tab}>
        <p className="mb-3">
          Under this Modified NNN lease, your maintenance responsibility is limited to capital items — any single repair or replacement costing <strong>$10,000 or more per occurrence</strong>, plus these specific exclusions regardless of cost:
        </p>
        <ul className="mb-2.5 pl-5 text-[13px] list-disc leading-7">
          <li>Full roof membrane/structure replacement</li>
          <li>Full HVAC system replacement (at end of useful life)</li>
          <li>Foundation repair and structural framing replacement</li>
          <li>Load-bearing wall and exterior envelope failures</li>
          <li>Main electrical and main plumbing service replacement</li>
          <li>Major parking lot repaving (full surface, not patching)</li>
          <li>Latent defects existing as of the Effective Date</li>
          <li>Pre-existing code violations not caused by tenant</li>
        </ul>
        <Callout type="info">
          Items excluded from Operating Costs also include debt service, leasing commissions, TI costs, your negligence costs, and pre-existing environmental remediation. These can never be passed through to the tenant.
        </Callout>
      </Section>

      <Section title="Capital Amortization for Tenant-Caused Damage" icon="⚖️" party="landlord" tab={tab}>
        <p className="mb-2.5">
          New in v2: If a major building system (roof, HVAC, plumbing, electrical, structural) fails prematurely because of the tenant&apos;s negligence, improper maintenance, or misuse, you and the tenant can agree in writing to amortize the replacement cost over the useful life of the new system. The tenant&apos;s amortized share becomes Additional Rent.
        </p>
        <Callout type="tip">
          This is a targeted protection. If the tenant lets the HVAC system fail by not maintaining it (despite the required maintenance contract), you don&apos;t have to eat the full replacement cost. The amortization must be agreed in writing — neither party is forced into it. But the HVAC maintenance contract requirement gives you strong leverage in this situation.
        </Callout>
      </Section>

      <Section title="The Renovation (Your Biggest Obligation)" icon="🏗️" party="landlord" tab={tab}>
        <p className="mb-2.5">
          You are funding and managing the full renovation. The scope (Exhibit C / Schedule C-1) includes:
        </p>
        <ul className="mb-2.5 pl-5 text-[13px] list-disc leading-7">
          <li>Structural/envelope: roof, exterior walls, foundation, windows/doors, weatherproofing</li>
          <li>HVAC: new system sized for clinical occupancy, individual zone controls, healthcare ventilation</li>
          <li>Electrical: panel upgrade, dedicated medical circuits, emergency lighting, generator provisions</li>
          <li>Interior build-out: therapy rooms with sound attenuation, reception, admin, break room, storage, server room</li>
          <li>Technology: structured cabling, data drops per office, dedicated server room cooling</li>
          <li>Life safety: fire alarm/suppression, emergency exits, ADA accessibility, security system</li>
          <li>Exterior: parking lot repair/striping, ADA parking, landscaping, lighting, signage provisions</li>
          <li>Assembly Room: dedicated HVAC zone, access controls separating from clinical areas</li>
        </ul>
        <Callout type="warning">
          You must deliver with a certificate of occupancy. You warrant the improvements against defects for 12 months after delivery and assign manufacturer warranties to the tenant. Make sure Schedule C-1 is thorough — any ambiguity about what&apos;s included will work against you later.
        </Callout>
      </Section>

      <Section title="Change Orders (New in v2)" icon="📋" party="landlord" tab={tab}>
        <p className="mb-2.5">
          If field conditions, code requirements, or material unavailability require changes to the scope of work, you notify the tenant of the proposed change, cost impact, and schedule impact. If the change materially alters the scope or delays delivery by more than {leaseConfig.threshold} days, the tenant can approve or reject within 5 business days.
        </p>
        <p className="mb-2.5">
          The tenant can also request changes — but any cost increase from their requests is at their expense, and no tenant-requested change binds you unless you approve in writing. All change orders must be documented, signed by both parties.
        </p>
      </Section>

      <Section title="Early Access (New in v2)" icon="🔑" party="landlord" tab={tab}>
        <p className="mb-2.5">
          After you deliver the Anticipated Delivery Notice (90 days before expected completion), the tenant has non-exclusive access for setup activities: furniture/equipment install, cabling, licensing inspections, staff training.
        </p>
        <p className="mb-2.5">
          <strong>Conditions:</strong> no interference with your contractors, tenant must carry insurance, follow site rules, and repair any damage caused. If you determine the tenant is interfering with construction, you can restrict access — and any resulting delay becomes Tenant Delay.
        </p>
        <Callout type="info">
          Early access does not trigger rent or the Commencement Date. Utility costs that can&apos;t be separated between your construction work and the tenant&apos;s early access activities are allocated by you in good faith.
        </Callout>
      </Section>

      <Section title="Access Restrictions (HIPAA)" icon="🔐" party="landlord" tab={tab}>
        <p className="mb-2.5">
          During clinic operating hours, your access is restricted to emergencies and pre-scheduled maintenance with 24 hours&apos; written notice. No access to patient care areas during active therapy sessions (except imminent threat to life or property). All your personnel must follow the tenant&apos;s sign-in and visual privacy protocols.
        </p>
        <Callout type="info">
          In practice, most maintenance can be scheduled outside clinic hours. HIPAA violations carry serious federal penalties — these restrictions protect you as well as the tenant.
        </Callout>
      </Section>
    </div>
  );
}
