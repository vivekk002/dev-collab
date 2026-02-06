import { prisma } from "@/lib/prisma";
import { Task } from "@/types/types";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export const POST = async (NextRequest: NextRequest) => {
  try {
    const session = await auth();

    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body: Task = await NextRequest.json();

    const {
      title,
      description,
      status,
      priority,
      dueDate,
      creatorId,
      workspaceId,
    } = body;

    if (!title || !description || !creatorId || !workspaceId) {
      return NextResponse.json(
        {
          error: "Please fill the required fields",
        },
        { status: 400 },
      );
    }

    const task = await prisma.task.create({
      data: {
        title,
        description,
        status,
        priority,
        dueDate,
        creatorId,
        workspaceId,
      },
    });
    console.log(task);

    return NextResponse.json(
      { message: "Task created successfully" },
      { status: 201 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error: "Internal Server Error",
      },
      { status: 500 },
    );
  }
};

export const GET = async (NextRequest: NextRequest) => {
  try {
    const session = await auth();

    if (!session?.user?.email) {
      NextResponse.json(
        {
          error: "Unauthraized user",
        },
        {
          status: 401,
        },
      );
    }

    const tasks = await prisma.task.findMany({
      include: {
        creator: true,
        workspace: true,
      },
    });
    return NextResponse.json(tasks, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error: "Internal Server Error",
      },
      { status: 500 },
    );
  }
};
