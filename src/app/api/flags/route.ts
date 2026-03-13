import { NextResponse } from "next/server";
import { getFlags, addFlag } from "@/lib/flags";

export async function GET() {
  const flags = await getFlags();
  flags.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  return NextResponse.json(flags);
}

export async function POST(request: Request) {
  const body = await request.json();
  const { party, tab, section, note } = body;

  if (!party || !tab || !section || !note) {
    return NextResponse.json(
      { error: "Missing required fields: party, tab, section, note" },
      { status: 400 }
    );
  }

  if (party !== "landlord" && party !== "tenant") {
    return NextResponse.json(
      { error: "party must be 'landlord' or 'tenant'" },
      { status: 400 }
    );
  }

  const flag = await addFlag({ party, tab, section, note });
  return NextResponse.json(flag, { status: 201 });
}
