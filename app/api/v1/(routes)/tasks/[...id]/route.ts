import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const session = await auth();
    if (!session?.user?.email) {
      return NextResponse.json(
        {
          error: "Unauthraized user",
        },
        {
          status: 401,
        },
      );
    }

    const id = req.nextUrl.searchParams.get("id");
    if (!id) {
      return NextResponse.json(
        {
          error: "Task id is required",
        },
        {
          status: 400,
        },
      );
    }

    const task = await prisma.task.findUnique({
      where: {
        id,
      },
    });
    if (!task) {
      return NextResponse.json(
        {
          error: "Task not found",
        },
        {
          status: 404,
        },
      );
    }
    return NextResponse.json(task, { status: 200 });
  } catch (error) {
    console.log(error);
    NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
};

export const PUT = async (req: NextRequest) => {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthraized user" }, { status: 401 });
    }

    const id = req.nextUrl.searchParams.get("id");
    if (!id) {
      return NextResponse.json(
        { error: "Task id is required" },
        { status: 400 },
      );
    }

    const body = await req.json();

    const { title, description, status, priority, dueDate } = body;

    const task = await prisma.task.update({
      where: {
        id,
      },
      data: {
        title,
        description,
        status,
        priority,
        dueDate,
      },
    });
    return NextResponse.json(task, { status: 200 });
  } catch (error) {
    console.log(error);
    NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
};

export const DELETE = async (req: NextRequest) => {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthraized user" }, { status: 401 });
    }

    const id = req.nextUrl.searchParams.get("id");
    if (!id) {
      return NextResponse.json(
        { error: "Task id is required" },
        { status: 400 },
      );
    }

    const task = await prisma.task.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(task, { status: 200 });
  } catch (error) {
    console.log(error);
    NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
};
