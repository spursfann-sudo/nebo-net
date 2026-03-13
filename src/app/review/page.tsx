import type { Metadata } from "next";
import { getFlags } from "@/lib/flags";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Review — Submitted Questions & Notes",
};

export const dynamic = "force-dynamic";

export default async function ReviewPage() {
  const flags = await getFlags();
  flags.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  // Group by party then tab
  const grouped: Record<string, Record<string, typeof flags>> = {};
  for (const flag of flags) {
    if (!grouped[flag.party]) grouped[flag.party] = {};
    if (!grouped[flag.party][flag.tab]) grouped[flag.party][flag.tab] = [];
    grouped[flag.party][flag.tab].push(flag);
  }

  return (
    <div className="max-w-3xl mx-auto px-4">
      <div className="text-center py-8 pb-6">
        <h1 className="text-[22px] font-bold mb-1.5 text-slate-900">
          Submitted Questions & Notes
        </h1>
        <p className="text-sm text-slate-500">
          Flags and notes from both parties, organized by section.
        </p>
      </div>

      {flags.length === 0 ? (
        <div className="text-center py-12 text-slate-400 text-sm">
          No flags submitted yet.
        </div>
      ) : (
        Object.entries(grouped).map(([party, tabs]) => (
          <div key={party} className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span
                className={`text-xs font-semibold px-2.5 py-1 rounded-full text-white ${
                  party === "landlord" ? "bg-indigo-500" : "bg-teal-600"
                }`}
              >
                {party === "landlord" ? "Landlord" : "Tenant"}
              </span>
            </div>
            {Object.entries(tabs).map(([tab, tabFlags]) => (
              <div key={tab} className="mb-4">
                <div className="text-sm font-semibold text-slate-600 mb-2 capitalize">
                  {tab}
                </div>
                {tabFlags.map((flag) => (
                  <div
                    key={flag.id}
                    className="border border-slate-200 rounded-lg p-3.5 mb-2 bg-white"
                  >
                    <div className="flex justify-between items-start gap-2 mb-1">
                      <div className="font-medium text-[13px] text-slate-800">
                        {flag.section}
                      </div>
                      <div className="text-xs text-slate-400 shrink-0">
                        {new Date(flag.createdAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          hour: "numeric",
                          minute: "2-digit",
                        })}
                      </div>
                    </div>
                    <div className="text-[13px] text-slate-600">
                      {flag.note}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))
      )}

      <Footer />
    </div>
  );
}
