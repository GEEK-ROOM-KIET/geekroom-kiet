import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { contacts } from "@/lib/schema";
import { contactSchema } from "@/lib/validation";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = contactSchema.parse(body);

    await db.insert(contacts).values(parsed);

    return NextResponse.json({ message: "Message saved successfully!" });
  } catch (error) {
    console.error("DB error:", error);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}
