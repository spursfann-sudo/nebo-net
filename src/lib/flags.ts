import fs from "fs/promises";
import path from "path";
import os from "os";
import type { Flag } from "./types";

const PRIMARY_DIR = path.join(process.cwd(), "data");
const FALLBACK_DIR = path.join(os.tmpdir(), "nebo-net-flags");
const FLAGS_FILENAME = "flags.json";

let resolvedDir: string | null = null;

async function getDataDir(): Promise<string> {
  if (resolvedDir) {
    console.log("[flags] getDataDir cached:", resolvedDir);
    return resolvedDir;
  }

  console.log("[flags] getDataDir resolving... cwd:", process.cwd(), "PRIMARY_DIR:", PRIMARY_DIR);

  // Try primary dir first
  try {
    await fs.mkdir(PRIMARY_DIR, { recursive: true });
    const testFile = path.join(PRIMARY_DIR, ".write-test");
    await fs.writeFile(testFile, "");
    await fs.unlink(testFile);
    resolvedDir = PRIMARY_DIR;
    console.log("[flags] getDataDir resolved to PRIMARY:", PRIMARY_DIR);
    return PRIMARY_DIR;
  } catch (err) {
    console.log("[flags] PRIMARY_DIR not writable:", err);
  }

  await fs.mkdir(FALLBACK_DIR, { recursive: true });
  resolvedDir = FALLBACK_DIR;
  console.log("[flags] getDataDir resolved to FALLBACK:", FALLBACK_DIR);
  return FALLBACK_DIR;
}

export async function getFlags(): Promise<Flag[]> {
  try {
    const dir = await getDataDir();
    const data = await fs.readFile(path.join(dir, FLAGS_FILENAME), "utf-8");
    return JSON.parse(data) as Flag[];
  } catch {
    return [];
  }
}

export async function addFlag(
  flag: Omit<Flag, "id" | "createdAt">
): Promise<Flag> {
  const dir = await getDataDir();
  const flagsFile = path.join(dir, FLAGS_FILENAME);
  console.log("[flags] addFlag writing to:", flagsFile);
  const flags = await getFlags();
  const newFlag: Flag = {
    ...flag,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  flags.push(newFlag);
  await fs.writeFile(flagsFile, JSON.stringify(flags, null, 2));
  console.log("[flags] addFlag wrote", flags.length, "flags to", flagsFile);
  return newFlag;
}
