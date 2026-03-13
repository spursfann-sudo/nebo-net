import { kv } from "@vercel/kv";
import type { Flag } from "./types";

const FLAGS_KEY = "nebo-net:flags";

export async function getFlags(): Promise<Flag[]> {
  try {
    const flags = await kv.get<Flag[]>(FLAGS_KEY);
    return flags ?? [];
  } catch {
    return [];
  }
}

export async function addFlag(
  flag: Omit<Flag, "id" | "createdAt">
): Promise<Flag> {
  const flags = await getFlags();
  const newFlag: Flag = {
    ...flag,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  flags.push(newFlag);
  await kv.set(FLAGS_KEY, flags);
  return newFlag;
}
