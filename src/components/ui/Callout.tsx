import type { CalloutType } from "@/lib/types";

const styles: Record<CalloutType, { bg: string; border: string; text: string; label: string }> = {
  info: { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-800", label: "Key Point" },
  success: { bg: "bg-green-50", border: "border-green-200", text: "text-green-800", label: "Your Protection" },
  warning: { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-800", label: "Important" },
  tip: { bg: "bg-purple-50", border: "border-purple-200", text: "text-purple-800", label: "Why This Matters" },
  action: { bg: "bg-red-50", border: "border-red-200", text: "text-red-800", label: "Action Required" },
};

export default function Callout({
  type = "info",
  children,
}: {
  type?: CalloutType;
  children: React.ReactNode;
}) {
  const s = styles[type];
  return (
    <div className={`${s.bg} border ${s.border} rounded-lg px-3.5 py-2.5 my-2.5 text-[13px] ${s.text} leading-relaxed`}>
      <strong>{s.label}:</strong> {children}
    </div>
  );
}
