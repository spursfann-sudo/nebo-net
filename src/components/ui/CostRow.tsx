export default function CostRow({
  item,
  paidBy,
  note,
}: {
  item: string;
  paidBy: "You" | "Landlord";
  note?: string;
}) {
  const badgeClass =
    paidBy === "You"
      ? "bg-amber-100 text-amber-900"
      : "bg-green-100 text-green-800";

  return (
    <div className="grid grid-cols-[1fr_auto] gap-2 py-2 border-b border-slate-100 text-[13px] items-start">
      <div>
        <span className="text-slate-700">{item}</span>
        {note && <span className="text-slate-500 text-xs block mt-0.5">{note}</span>}
      </div>
      <span className={`${badgeClass} text-xs font-semibold px-2 py-0.5 rounded`}>
        {paidBy}
      </span>
    </div>
  );
}
