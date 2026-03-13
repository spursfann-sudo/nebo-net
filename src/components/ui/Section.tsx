"use client";

import { useState } from "react";
import ChevronDown from "./ChevronDown";
import FlagForm from "./FlagForm";
import type { Party } from "@/lib/types";

export default function Section({
  title,
  icon,
  children,
  defaultOpen = false,
  party,
  tab,
}: {
  title: string;
  icon: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  party: Party;
  tab: string;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const [showFlag, setShowFlag] = useState(false);

  return (
    <div
      className={`border border-slate-200 rounded-[10px] mb-3 overflow-hidden bg-white transition-shadow duration-200 ${
        open ? "shadow-md" : ""
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center gap-2.5 py-3.5 px-[18px] border-none cursor-pointer text-[15px] font-semibold text-slate-800 text-left min-h-[48px] ${
          open ? "bg-slate-50" : "bg-white"
        }`}
      >
        <span className="text-xl">{icon}</span>
        <span className="flex-1">{title}</span>
        <ChevronDown open={open} />
      </button>
      {open && (
        <>
          <div className="px-[18px] pb-[18px] pt-1 text-sm leading-relaxed text-slate-700">
            {children}
          </div>
          <div className="px-[18px] pb-2 flex justify-end">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowFlag(!showFlag);
              }}
              className="text-xs text-slate-400 hover:text-slate-600 cursor-pointer"
              title="Flag this section"
            >
              🚩 Question?
            </button>
          </div>
          {showFlag && (
            <FlagForm
              party={party}
              tab={tab}
              section={title}
              onClose={() => setShowFlag(false)}
            />
          )}
        </>
      )}
    </div>
  );
}
