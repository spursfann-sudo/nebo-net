import Link from "next/link";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-4">
      <div className="text-center py-12 pb-8">
        <h1 className="text-2xl font-bold mb-2 text-slate-900">
          Modified NNN Lease Agreement
        </h1>
        <div className="text-sm text-slate-500 mb-3">
          4000 Pulaski Pike NW, Huntsville, AL 35810
        </div>
        <div className="inline-block px-3 py-1 bg-amber-100 rounded-full text-xs font-semibold text-amber-800">
          DRAFT — For Discussion Only
        </div>
        <p className="text-sm text-slate-600 mt-6 max-w-md mx-auto leading-relaxed">
          This interactive guide makes the lease agreement accessible and understandable.
          Select your role to see the sections most relevant to you.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <Link
          href="/landlord"
          className="flex-1 block border-2 border-indigo-200 rounded-xl p-6 text-center hover:border-indigo-400 hover:shadow-md transition-all no-underline"
        >
          <div className="text-3xl mb-3">🏢</div>
          <div className="text-lg font-semibold text-indigo-600 mb-1">I am the Landlord</div>
          <div className="text-sm text-slate-500">
            Rent phases, protections, obligations, and timeline
          </div>
        </Link>

        <Link
          href="/tenant"
          className="flex-1 block border-2 border-teal-200 rounded-xl p-6 text-center hover:border-teal-400 hover:shadow-md transition-all no-underline"
        >
          <div className="text-3xl mb-3">🏥</div>
          <div className="text-lg font-semibold text-teal-600 mb-1">I am the Tenant</div>
          <div className="text-sm text-slate-500">
            Your costs, rights, obligations, and risk factors
          </div>
        </Link>
      </div>

      <Footer />
    </div>
  );
}
