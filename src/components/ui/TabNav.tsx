"use client";

export default function TabNav({
  tabs,
  activeTab,
  onTabChange,
}: {
  tabs: { id: string; label: string }[];
  activeTab: string;
  onTabChange: (id: string) => void;
}) {
  return (
    <div className="flex gap-1 p-1 bg-slate-100 rounded-[10px] mb-5 overflow-x-auto">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`flex-1 min-w-fit py-2 px-1 rounded-lg text-[13px] cursor-pointer transition-all duration-150 whitespace-nowrap ${
            activeTab === tab.id
              ? "font-semibold bg-white text-slate-800 shadow-sm"
              : "font-normal bg-transparent text-slate-500"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
