import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";
import { z } from "zod";


const prisma = new PrismaClient();

const contactSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(5, "Message is too short"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, message } = parsed.data;

    const newMessage = await prisma.contactMessage.create({
      data: { name, email, message },
    });

    return NextResponse.json({ success: true, data: newMessage });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
