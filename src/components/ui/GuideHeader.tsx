import Link from "next/link";
import type { Party } from "@/lib/types";

export default function GuideHeader({ party }: { party: Party }) {
  const isLandlord = party === "landlord";
  const accentClass = isLandlord ? "text-accent-landlord" : "text-accent-tenant";
  const roleLabel = isLandlord ? "Landlord Reference Guide" : "Tenant Reference Guide";
  const otherLabel = isLandlord ? "View the Tenant\u2019s Guide" : "View the Landlord\u2019s Guide";
  const otherHref = isLandlord ? "/tenant" : "/landlord";

  return (
    <div className="text-center py-7 pb-5">
      <div className={`text-xs font-semibold ${accentClass} tracking-[1.5px] uppercase mb-1.5`}>
        {roleLabel}
      </div>
      <h1 className="text-[22px] font-bold mb-1.5 text-slate-900">
        Modified NNN Lease Agreement
      </h1>
      <div className="text-sm text-slate-500">
        4000 Pulaski Pike NW, Huntsville, AL 35810
      </div>
      <div className="inline-block mt-2.5 px-3 py-1 bg-amber-100 rounded-full text-xs font-semibold text-amber-800">
        DRAFT — For Discussion Only
      </div>
      <div className="mt-3">
        <Link href={otherHref} className={`text-xs ${accentClass} hover:underline`}>
          {otherLabel} →
        </Link>
      </div>
    </div>
  );
}
