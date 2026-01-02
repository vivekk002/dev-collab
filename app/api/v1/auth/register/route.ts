import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import bcrypt from "bcryptjs";
import { error } from "console";

const registerSchema = z.object({
  name: z.string().min(3, "name must be at least 3 characters").max(20),
  email: z.string().email("invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(50),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const validatedData = registerSchema.parse(body);
    const { name, email, password } = validatedData;

    const existingUser = await prisma.user.findUnique({
      where: { email: email },
    });

    if (existingUser) {
      return NextResponse.json({
        error: "User with this email already exists",
        status: 400,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 15);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });
    return NextResponse.json({
      message: " User registered successfully",
      user,
      status: 201,
    });
  } catch (err) {
    return NextResponse.json({
      error: "Internal server error",
      status: 500,
    });
  }
}
