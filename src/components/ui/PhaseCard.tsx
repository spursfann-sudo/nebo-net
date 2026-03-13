export default function PhaseCard({
  phase,
  title,
  subtitle,
  badge,
  color,
  children,
}: {
  phase: string;
  title: string;
  subtitle?: string;
  badge?: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="bg-slate-50 rounded-r-lg py-3 px-4 mb-2.5"
      style={{ borderLeft: `4px solid ${color}` }}
    >
      <div className="flex items-center gap-2 mb-1">
        <span
          className="text-white text-[11px] font-bold py-0.5 px-2 rounded"
          style={{ backgroundColor: color }}
        >
          {phase}
        </span>
        <span className="font-semibold text-sm">{title}</span>
      </div>
      {subtitle && <div className="text-xs text-slate-500 mb-1">{subtitle}</div>}
      {badge && (
        <div
          className="inline-block text-xs font-semibold py-0.5 px-2 rounded mb-1.5"
          style={{ color, backgroundColor: `${color}15` }}
        >
          {badge}
        </div>
      )}
      <div className="text-[13px] text-slate-700">{children}</div>
    </div>
  );
}
