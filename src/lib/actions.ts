"use server";

import { addFlag } from "./flags";
import type { Party } from "./types";

export async function submitFlag(
  party: Party,
  tab: string,
  section: string,
  note: string
) {
  console.log("[action] submitFlag called with:", { party, tab, section, note: note.substring(0, 30) });
  if (!party || !tab || !section || !note) {
    console.log("[action] missing required fields");
    return { success: false as const, error: "Missing required fields" };
  }
  try {
    const result = await addFlag({ party, tab, section, note });
    console.log("[action] addFlag returned:", result.id);
    return { success: true as const };
  } catch (err) {
    console.error("[action] addFlag error:", err);
    return { success: false as const, error: String(err) };
  }
}
