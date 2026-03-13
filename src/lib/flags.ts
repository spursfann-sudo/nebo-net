import fs from "fs/promises";
import path from "path";
import type { Flag } from "./types";

const DATA_DIR = path.join(process.cwd(), "data");
const FLAGS_FILE = path.join(DATA_DIR, "flags.json");

async function ensureDataDir() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
  } catch {
    // directory already exists
  }
}

export async function getFlags(): Promise<Flag[]> {
  try {
    const data = await fs.readFile(FLAGS_FILE, "utf-8");
    return JSON.parse(data) as Flag[];
  } catch {
    return [];
  }
}

export async function addFlag(
  flag: Omit<Flag, "id" | "createdAt">
): Promise<Flag> {
  await ensureDataDir();
  const flags = await getFlags();
  const newFlag: Flag = {
    ...flag,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  flags.push(newFlag);
  await fs.writeFile(FLAGS_FILE, JSON.stringify(flags, null, 2));
  return newFlag;
}
