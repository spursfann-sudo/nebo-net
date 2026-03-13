export default function Term({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between py-2 border-b border-slate-100 gap-3">
      <span className="text-slate-500 text-[13px] shrink-0">{label}</span>
      <span className="font-semibold text-[13px] text-right">{value}</span>
    </div>
  );
}
