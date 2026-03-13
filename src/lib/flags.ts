import { createClient } from "redis";
import type { Flag } from "./types";

const FLAGS_KEY = "nebo-net:flags";

function getClient() {
  return createClient({ url: process.env.REDIS_URL });
}

export async function getFlags(): Promise<Flag[]> {
  const client = getClient();
  try {
    await client.connect();
    const data = await client.get(FLAGS_KEY);
    return data ? (JSON.parse(data) as Flag[]) : [];
  } catch {
    return [];
  } finally {
    await client.disconnect();
  }
}

export async function addFlag(
  flag: Omit<Flag, "id" | "createdAt">
): Promise<Flag> {
  const client = getClient();
  await client.connect();
  try {
    const data = await client.get(FLAGS_KEY);
    const flags: Flag[] = data ? JSON.parse(data) : [];
    const newFlag: Flag = {
      ...flag,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };
    flags.push(newFlag);
    await client.set(FLAGS_KEY, JSON.stringify(flags));
    return newFlag;
  } finally {
    await client.disconnect();
  }
}
