"use client";

import { useState } from "react";
import { submitFlag } from "@/lib/actions";
import type { Party } from "@/lib/types";

export default function FlagForm({
  party,
  tab,
  section,
  onClose,
}: {
  party: Party;
  tab: string;
  section: string;
  onClose: () => void;
}) {
  const [note, setNote] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async () => {
    if (!note.trim()) return;
    setStatus("sending");
    try {
      const result = await submitFlag(party, tab, section, note.trim());
      if (!result.success) {
        console.error("Flag submission failed:", result.error);
        setErrorMsg(result.error ?? "Unknown error");
        setStatus("error");
        return;
      }
      setStatus("sent");
      setTimeout(() => onClose(), 2000);
    } catch (err) {
      console.error("Flag submission error:", err);
      setErrorMsg(err instanceof Error ? err.message : String(err));
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="px-4 pb-3 text-[13px] text-green-700 font-medium">
        Sent — thank you for your feedback.
      </div>
    );
  }

  return (
    <div className="px-4 pb-3">
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="What questions do you have about this section?"
        className="w-full text-base border border-slate-200 rounded-lg p-2.5 min-h-[80px] text-[13px] resize-y focus:outline-none focus:ring-2 focus:ring-slate-300"
      />
      <div className="flex gap-2 mt-2">
        <button
          onClick={handleSubmit}
          disabled={status === "sending" || !note.trim()}
          className="px-3 py-1.5 bg-slate-800 text-white text-[13px] rounded-lg disabled:opacity-50 cursor-pointer"
        >
          {status === "sending" ? "Sending..." : "Submit"}
        </button>
        <button
          onClick={onClose}
          className="px-3 py-1.5 text-slate-500 text-[13px] cursor-pointer"
        >
          Cancel
        </button>
      </div>
      {status === "error" && (
        <p className="text-red-600 text-xs mt-1">
          {errorMsg || "Something went wrong. Please try again."}
        </p>
      )}
    </div>
  );
}
