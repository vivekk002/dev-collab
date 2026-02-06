import {
  PrismaClient,
  Role,
  TaskStatus,
  Priority,
  ActivityType,
} from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting seed...");

  // 1. CLEANUP (Optional: Remove existing data to avoid conflicts)
  // Delete in order of dependency (children first)

  // 2. USERS
  // Password hash for 'password123'
  const passwordHash =
    "$2a$10$EpWryX.x8x/wO/jW.x/wO.x/wO/jW.x/wO/jW.x/wO/jW.x/wO";

  const alice = await prisma.user.create({
    data: {
      name: "Alice Admin",
      email: "alice@collabspace.com",
      password: passwordHash,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice",
      role: Role.ADMIN,
    },
  });

  const bob = await prisma.user.create({
    data: {
      name: "Bob Builder",
      email: "bob@collabspace.com",
      password: passwordHash,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob",
      role: Role.MEMBER,
    },
  });

  const charlie = await prisma.user.create({
    data: {
      name: "Charlie Checker",
      email: "charlie@collabspace.com",
      password: passwordHash,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie",
      role: Role.VIEWER,
    },
  });

  // 3. WORKSPACES & MEMBERS
  const engineeringWS = await prisma.workspace.create({
    data: {
      name: "Engineering Team",
      description: "Main workspace for core development",
      members: {
        create: [
          { userId: alice.id, role: Role.ADMIN },
          { userId: bob.id, role: Role.MEMBER },
          { userId: charlie.id, role: Role.VIEWER },
        ],
      },
    },
  });

  const marketingWS = await prisma.workspace.create({
    data: {
      name: "Marketing Campaigns",
      description: "Q1 Marketing Initiatives",
      members: {
        create: [
          { userId: bob.id, role: Role.ADMIN }, // Bob is admin here
          { userId: alice.id, role: Role.MEMBER },
        ],
      },
    },
  });

  // 4. CHANNELS & MESSAGES
  const generalChannel = await prisma.channel.create({
    data: {
      name: "general",
      description: "General discussion",
      workspaceId: engineeringWS.id,
      isPrivate: false,
    },
  });

  const devChannel = await prisma.channel.create({
    data: {
      name: "dev-updates",
      description: "Commit logs and standup",
      workspaceId: engineeringWS.id,
      isPrivate: true,
    },
  });

  await prisma.message.createMany({
    data: [
      {
        content: "Welcome to the new engineering workspace!",
        authorId: alice.id,
        channelId: generalChannel.id,
      },
      {
        content: "Thanks Alice, excited to start.",
        authorId: bob.id,
        channelId: generalChannel.id,
      },
      {
        content: "Deploying hotfix to production...",
        authorId: bob.id,
        channelId: devChannel.id,
      },
    ],
  });

  // 5. DOCUMENTS
  const requirementsDoc = await prisma.document.create({
    data: {
      title: "System Architecture v1.0",
      content:
        "<h1>Architecture Overview</h1><p>We are using Next.js 15 and Prisma.</p>",
      isPublic: false,
      authorId: alice.id,
      workspaceId: engineeringWS.id,
    },
  });

  const marketingPlanDoc = await prisma.document.create({
    data: {
      title: "Social Media Strategy",
      content: "<h2>Q1 Goals</h2><ul><li>Increase reach by 20%</li></ul>",
      isPublic: true,
      authorId: bob.id,
      workspaceId: marketingWS.id,
    },
  });

  // 6. TASKS & ASSIGNEES
  const task1 = await prisma.task.create({
    data: {
      title: "Setup Database Schema",
      description: "Define models for Users and Workspaces",
      status: TaskStatus.COMPLETED,
      priority: Priority.URGENT,
      dueDate: new Date(), // Today
      creatorId: alice.id,
      workspaceId: engineeringWS.id,
      assignees: {
        create: [{ userId: bob.id }],
      },
    },
  });

  const task2 = await prisma.task.create({
    data: {
      title: "Implement Auth Flow",
      description: "Integrate NextAuth with Credentials provider",
      status: TaskStatus.IN_PROGRESS,
      priority: Priority.HIGH,
      dueDate: new Date(new Date().setDate(new Date().getDate() + 3)), // 3 days later
      creatorId: alice.id,
      workspaceId: engineeringWS.id,
      assignees: {
        create: [{ userId: bob.id }, { userId: alice.id }],
      },
    },
  });

  // 7. COMMENTS
  await prisma.comment.create({
    data: {
      content: "Make sure to add indexes for performance.",
      authorId: alice.id,
      taskId: task1.id, // Comment on Task
    },
  });

  await prisma.comment.create({
    data: {
      content: "This section needs more detail regarding caching.",
      authorId: bob.id,
      documentId: requirementsDoc.id, // Comment on Document
    },
  });

  // 8. ACTIVITY LOGS
  await prisma.activity.createMany({
    data: [
      {
        type: ActivityType.MEMBER_JOINED,
        metadata: JSON.stringify({ memberName: "Bob Builder" }),
        userId: bob.id,
        workspaceId: engineeringWS.id,
      },
      {
        type: ActivityType.DOCUMENT_CREATED,
        metadata: JSON.stringify({ title: "System Architecture v1.0" }),
        userId: alice.id,
        workspaceId: engineeringWS.id,
        documentId: requirementsDoc.id,
      },
      {
        type: ActivityType.TASK_COMPLETED,
        metadata: JSON.stringify({ taskTitle: "Setup Database Schema" }),
        userId: bob.id,
        workspaceId: engineeringWS.id,
        taskId: task1.id,
      },
    ],
  });

  console.log("✅ Seed completed successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
