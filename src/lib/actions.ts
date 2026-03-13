"use server";

import { addFlag } from "./flags";
import type { Party } from "./types";

export async function submitFlag(
  party: Party,
  tab: string,
  section: string,
  note: string
) {
  if (!party || !tab || !section || !note) {
    return { success: false as const, error: "Missing required fields" };
  }
  try {
    await addFlag({ party, tab, section, note });
    return { success: true as const };
  } catch (err) {
    return { success: false as const, error: String(err) };
  }
}
