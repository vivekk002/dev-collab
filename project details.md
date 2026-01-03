<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# this project is suggested by you so i think most of the answer will be in your mind ?

Perfect! Based on our conversation history and the project we've been building together, let me create the comprehensive **CollabSpace Black Box Documentation**. I'll use what we've already implemented and discussed:

***

# **📦 COLLABSPACE - BLACK BOX DOCUMENTATION**

### **Complete Project Reference \& Implementation Guide**

**Last Updated:** January 3, 2026, 11:18 PM IST
**Version:** 1.0.0
**Project Status:** In Active Development (Authentication \& UI Complete)

***

## **📋 TABLE OF CONTENTS**

1. [Project Overview](#1-project-overview)
2. [Tech Stack \& Dependencies](#2-tech-stack--dependencies)
3. [Project Structure](#3-project-structure)
4. [Features \& Implementation Status](#4-features--implementation-status)
5. [Database Schema](#5-database-schema)
6. [Authentication System](#6-authentication-system)
7. [UI/UX Design System](#7-uiux-design-system)
8. [Component Architecture](#8-component-architecture)
9. [API Routes \& Endpoints](#9-api-routes--endpoints)
10. [Real-Time Features](#10-real-time-features)
11. [Development Workflow](#11-development-workflow)
12. [Deployment Guide](#12-deployment-guide)
13. [Environment Variables](#13-environment-variables)
14. [Troubleshooting \& Common Issues](#14-troubleshooting--common-issues)
15. [Future Roadmap](#15-future-roadmap)

***

## **1. PROJECT OVERVIEW**

### **1.1 Project Vision**

CollabSpace is a **modern, real-time team collaboration platform** built with Next.js 15, combining the best features of workspace management, document editing, task tracking, team chat, and team management into a unified green-themed interface.[^1][^2]

### **1.2 Target Users**

- Small to medium-sized development teams
- Remote-first organizations
- Startups requiring lightweight collaboration tools
- Teams seeking an integrated workspace solution[^3]


### **1.3 Core Value Proposition**

- **Unified Workspace:** All collaboration tools in one place
- **Real-Time Collaboration:** Live updates across documents, tasks, and chat[^1]
- **Beautiful Green Theme:** Modern, eco-friendly design aesthetic
- **Developer-Friendly:** Built with modern React patterns and TypeScript


### **1.4 MVP Features (Priority Order)**

1. ✅ **Authentication** - Complete
2. ✅ **Dashboard Shell** - Complete
3. 🔄 **Workspace Overview** - In Progress
4. 📋 **Documents** - Planned
5. ✅ **Tasks** - Planned
6. 💬 **Chat** - Planned
7. 👥 **Team Management** - Planned

***

## **2. TECH STACK \& DEPENDENCIES**

### **2.1 Core Framework**

```json
{
  "framework": "Next.js 15.1.4",
  "react": "19.0.0",
  "typescript": "^5",
  "node": ">=18.17.0"
}
```


### **2.2 Styling \& UI**

```json
{
  "tailwindcss": "^4.0.0",
  "tailwindcss-animate": "^1.0.7",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "tailwind-merge": "^2.6.0",
  "lucide-react": "^0.469.0",
  "next-themes": "^0.4.4"
}
```

**Design System:**

- Tailwind CSS v4 with OKLCH color space
- Green theme primary color: `oklch(0.65 0.19 145)` ≈ \#22C55E
- shadcn/ui components
- Geist Sans \& Geist Mono fonts


### **2.3 Authentication**

```json
{
  "next-auth": "^5.0.0-beta.25",
  "bcryptjs": "^2.4.3",
  "@auth/prisma-adapter": "latest"
}
```

**Strategy:**

- Credentials provider (email/password)
- JWT-based sessions
- Protected routes with middleware
- Social logins (planned: Google, GitHub)


### **2.4 Database \& ORM**

```json
{
  "@prisma/client": "^6.2.1",
  "prisma": "^6.2.1"
}
```

**Database:** PostgreSQL
**ORM:** Prisma
**Hosting:** Vercel Postgres (recommended) or Supabase

### **2.5 Real-Time Communication**

```json
{
  "socket.io": "^4.8.1",
  "socket.io-client": "^4.8.1"
}
```

**Use Cases:**

- Real-time chat messaging[^1]
- Live document collaboration
- Task updates and notifications
- Presence indicators


### **2.6 Development Tools**

```bash
"@types/node": "^20"
"@types/react": "^19"
"@types/react-dom": "^19"
"eslint": "^9"
"eslint-config-next": "15.1.4"
"turbo": "latest"  # Built-in with Next.js 15
```


***

## **3. PROJECT STRUCTURE**

### **3.1 Directory Tree**

```
collabspace/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx              # ✅ Login page
│   │   ├── register/
│   │   │   └── page.tsx              # ✅ Register page
│   │   └── layout.tsx                # ✅ Auth layout with green theme
│   ├── (dashboard)/
│   │   ├── workspace/
│   │   │   └── page.tsx              # 🔄 Workspace overview
│   │   ├── documents/
│   │   │   └── page.tsx              # 📋 Documents feature
│   │   ├── tasks/
│   │   │   └── page.tsx              # ✅ Tasks board
│   │   ├── chat/
│   │   │   └── page.tsx              # 💬 Chat interface
│   │   ├── team/
│   │   │   └── page.tsx              # 👥 Team management
│   │   ├── settings/
│   │   │   └── page.tsx              # ⚙️ User settings
│   │   └── layout.tsx                # ✅ Dashboard layout
│   ├── api/
│   │   ├── auth/
│   │   │   └── [...nextauth]/
│   │   │       └── route.ts          # ✅ NextAuth handlers
│   │   ├── documents/
│   │   │   └── route.ts              # 📋 Document CRUD
│   │   ├── tasks/
│   │   │   └── route.ts              # ✅ Task CRUD
│   │   ├── chat/
│   │   │   └── route.ts              # 💬 Chat messages
│   │   └── team/
│   │       └── route.ts              # 👥 Team operations
│   ├── globals.css                   # ✅ Green theme OKLCH colors
│   ├── layout.tsx                    # ✅ Root layout
│   └── page.tsx                      # ✅ Landing/redirect page
├── components/
│   ├── ui/                           # ✅ shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── sidebar.tsx
│   │   ├── badge.tsx
│   │   └── ...
│   ├── app-sidebar.tsx               # ✅ Main navigation sidebar
│   ├── dashboard-shell.tsx           # ✅ Dashboard wrapper
│   └── theme-provider.tsx            # ✅ Dark mode provider
├── lib/
│   ├── auth.ts                       # ✅ NextAuth configuration
│   ├── db.ts                         # ✅ Prisma client
│   └── utils.ts                      # ✅ Utility functions (cn)
├── prisma/
│   └── schema.prisma                 # ✅ Database schema
├── middleware.ts                     # ✅ Auth middleware
├── next.config.ts                    # ✅ Next.js config
├── package.json                      # ✅ Dependencies
├── tsconfig.json                     # ✅ TypeScript config
└── .env.local                        # ✅ Environment variables
```

**Legend:**

- ✅ Complete
- 🔄 In Progress
- 📋 Planned
- 💬 Planned
- 👥 Planned
- ⚙️ Planned

***

## **4. FEATURES \& IMPLEMENTATION STATUS**

### **4.1 Authentication System** ✅ **COMPLETE**

#### **Implemented:**

- User registration with email/password
- Login with credentials
- Protected routes via middleware
- Session management with JWT
- Logout functionality
- Password hashing with bcrypt
- Form validation


#### **Pages:**

- `/login` - Login page with green-themed card
- `/register` - Registration page with green-themed card


#### **Middleware Protection:**

```typescript
// middleware.ts
export { auth as middleware } from '@/lib/auth'

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
```


#### **Redirect Logic:**

- Unauthenticated users → `/login`
- Authenticated users on auth pages → `/workspace`

***

### **4.2 Dashboard Shell** ✅ **COMPLETE**

#### **Components:**

**1. AppSidebar** (`components/app-sidebar.tsx`)

- Green leaf logo with shadow
- Navigation menu with icons
- Hover effects with green accent
- Settings and logout buttons

**Navigation Items:**

```typescript
const navigation = [
  { name: 'Workspace', href: '/workspace', icon: Home },
  { name: 'Documents', href: '/documents', icon: FileText },
  { name: 'Tasks', href: '/tasks', icon: CheckSquare },
  { name: 'Chat', href: '/chat', icon: MessageSquare },
  { name: 'Team', href: '/team', icon: Users },
]
```

**2. DashboardShell** (`components/dashboard-shell.tsx`)

- Topbar with search
- Notification bell with badge
- User avatar with email
- Responsive layout
- Green focus rings on inputs


#### **Features:**

- Collapsible sidebar
- Search functionality
- Notification system (UI only)
- User profile display
- Responsive design

***

### **4.3 Workspace Overview** 🔄 **IN PROGRESS**

#### **Planned Features:**

- Dashboard with activity feed
- Quick stats cards (documents, tasks, messages)
- Recent activity timeline
- Quick actions panel
- Team online presence

***

### **4.4 Documents Feature** 📋 **PLANNED**

#### **Planned Tech Stack:**

- **Rich Text Editor:** Tiptap or Slate.js[^1]
- **Real-Time Collaboration:** Socket.io + Y.js/Automerge
- **File Storage:** Vercel Blob or AWS S3


#### **Features to Implement:**

- Create/edit/delete documents
- Rich text formatting (bold, italic, lists, headers)
- Real-time collaborative editing
- Document versioning/history
- Permission levels (view, comment, edit)
- Search and filter
- Folder organization
- Export options (PDF, Markdown)


#### **Database Schema (Planned):**

```prisma
model Document {
  id          String   @id @default(cuid())
  title       String
  content     String   @db.Text
  authorId    String
  author      User     @relation(fields: [authorId], references: [id])
  workspaceId String?
  workspace   Workspace? @relation(fields: [workspaceId], references: [id])
  isPublic    Boolean  @default(false)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  collaborators DocumentCollaborator[]
  versions      DocumentVersion[]
}

model DocumentCollaborator {
  id         String   @id @default(cuid())
  documentId String
  document   Document @relation(fields: [documentId], references: [id])
  userId     String
  user       User     @relation(fields: [userId], references: [id])
  role       String   // "view" | "comment" | "edit"
  createdAt  DateTime @default(now())
  
  @@unique([documentId, userId])
}
```


***

### **4.5 Tasks Feature** ✅ **PLANNED**

#### **Planned Tech Stack:**

- Kanban board with drag-and-drop
- **Library:** @dnd-kit/core or react-beautiful-dnd
- Real-time updates via Socket.io


#### **Features to Implement:**

- Create/edit/delete tasks[^4]
- Kanban board view (Todo, In Progress, Done)
- List view
- Calendar view
- Task assignment
- Due dates and priorities
- Labels and tags
- Subtasks and checklists
- Comments and attachments
- Activity log


#### **Database Schema (Planned):**

```prisma
model Task {
  id          String    @id @default(cuid())
  title       String
  description String?   @db.Text
  status      String    @default("todo") // "todo" | "in_progress" | "done"
  priority    String    @default("medium") // "low" | "medium" | "high"
  dueDate     DateTime?
  assigneeId  String?
  assignee    User?     @relation("TaskAssignee", fields: [assigneeId], references: [id])
  creatorId   String
  creator     User      @relation("TaskCreator", fields: [creatorId], references: [id])
  workspaceId String?
  workspace   Workspace? @relation(fields: [workspaceId], references: [id])
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
  
  labels      TaskLabel[]
  comments    TaskComment[]
}

model TaskLabel {
  id     String @id @default(cuid())
  name   String
  color  String
  taskId String
  task   Task   @relation(fields: [taskId], references: [id])
}

model TaskComment {
  id        String   @id @default(cuid())
  content   String   @db.Text
  taskId    String
  task      Task     @relation(fields: [taskId], references: [id])
  authorId  String
  author    User     @relation(fields: [authorId], references: [id])
  createdAt DateTime @default(now())
}
```


***

### **4.6 Chat Feature** 💬 **PLANNED**

#### **Planned Tech Stack:**

- **Real-Time:** Socket.io for WebSocket connections[^1]
- **Message Storage:** PostgreSQL + Prisma
- **File Sharing:** Vercel Blob or AWS S3


#### **Features to Implement:**

- Direct messages (1-on-1)
- Group channels
- Message threads
- Reactions and emojis
- File attachments
- Link previews
- Search messages
- Typing indicators
- Read receipts
- Online/offline status


#### **Database Schema (Planned):**

```prisma
model Channel {
  id        String    @id @default(cuid())
  name      String
  isPrivate Boolean   @default(false)
  createdAt DateTime  @default(now())
  
  members   ChannelMember[]
  messages  Message[]
}

model ChannelMember {
  id        String   @id @default(cuid())
  channelId String
  channel   Channel  @relation(fields: [channelId], references: [id])
  userId    String
  user      User     @relation(fields: [userId], references: [id])
  role      String   @default("member") // "admin" | "member"
  joinedAt  DateTime @default(now())
  
  @@unique([channelId, userId])
}

model Message {
  id        String   @id @default(cuid())
  content   String   @db.Text
  channelId String
  channel   Channel  @relation(fields: [channelId], references: [id])
  senderId  String
  sender    User     @relation(fields: [senderId], references: [id])
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  reactions MessageReaction[]
}

model MessageReaction {
  id        String  @id @default(cuid())
  emoji     String
  messageId String
  message   Message @relation(fields: [messageId], references: [id])
  userId    String
  user      User    @relation(fields: [userId], references: [id])
  
  @@unique([messageId, userId, emoji])
}
```


***

### **4.7 Team Management** 👥 **PLANNED**

#### **Features to Implement:**

- Invite team members via email
- Role management (Admin, Editor, Viewer)[^2]
- Team settings
- Member directory
- Activity logs
- Permission controls


#### **Database Schema (Planned):**

```prisma
model Workspace {
  id        String   @id @default(cuid())
  name      String
  ownerId   String
  owner     User     @relation("WorkspaceOwner", fields: [ownerId], references: [id])
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  members   WorkspaceMember[]
  documents Document[]
  tasks     Task[]
}

model WorkspaceMember {
  id          String    @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  userId      String
  user        User      @relation(fields: [userId], references: [id])
  role        String    @default("member") // "admin" | "editor" | "viewer"
  joinedAt    DateTime  @default(now())
  
  @@unique([workspaceId, userId])
}

model Invitation {
  id          String   @id @default(cuid())
  email       String
  workspaceId String
  role        String   @default("member")
  token       String   @unique
  expiresAt   DateTime
  createdAt   DateTime @default(now())
}
```


***

## **5. DATABASE SCHEMA**

### **5.1 Current Schema** ✅

**File:** `prisma/schema.prisma`

```prisma
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id            String    @id @default(cuid())
  name          String?
  email         String    @unique
  emailVerified DateTime?
  image         String?
  password      String?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  accounts      Account[]
  sessions      Session[]
}

model Account {
  id                String  @id @default(cuid())
  userId            String
  type              String
  provider          String
  providerAccountId String
  refresh_token     String? @db.Text
  access_token      String? @db.Text
  expires_at        Int?
  token_type        String?
  scope             String?
  id_token          String? @db.Text
  session_state     String?

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([provider, providerAccountId])
}

model Session {
  id           String   @id @default(cuid())
  sessionToken String   @unique
  userId       String
  expires      DateTime
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model VerificationToken {
  identifier String
  token      String   @unique
  expires    DateTime

  @@unique([identifier, token])
}
```


### **5.2 Database Migrations**

#### **Run Migrations:**

```bash
# Generate Prisma Client
npx prisma generate

# Create migration
npx prisma migrate dev --name init

# Push to database (development)
npx prisma db push

# Reset database
npx prisma migrate reset

# View database in Prisma Studio
npx prisma studio
```


***

## **6. AUTHENTICATION SYSTEM**

### **6.1 NextAuth Configuration** ✅

**File:** `lib/auth.ts`

```typescript
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { prisma } from '@/lib/db'
import bcrypt from 'bcryptjs'

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email as string,
          },
        })

        if (!user || !user.password) {
          return null
        }

        const isPasswordValid = await bcrypt.compare(
          credentials.password as string,
          user.password
        )

        if (!isPasswordValid) {
          return null
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
      }
      return session
    },
  },
})
```


### **6.2 API Route Handler** ✅

**File:** `app/api/auth/[...nextauth]/route.ts`

```typescript
import { handlers } from '@/lib/auth'

export const { GET, POST } = handlers
```


### **6.3 Registration API** ✅

**File:** `app/api/auth/register/route.ts`

```typescript
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import bcrypt from 'bcryptjs'

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json()

    // Validation
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      )
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    })

    return NextResponse.json(
      { message: 'User created successfully', userId: user.id },
      { status: 201 }
    )
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
```


***

## **7. UI/UX DESIGN SYSTEM**

### **7.1 Green Color Theme** ✅

**File:** `app/globals.css`

#### **Light Mode Colors (OKLCH):**

```css
:root {
  /* Primary: Fresh Green (#22C55E equivalent) */
  --primary: oklch(0.65 0.19 145);
  --primary-foreground: oklch(1 0 0);
  
  /* Accent: Vibrant Green */
  --accent: oklch(0.70 0.20 142);
  --accent-foreground: oklch(1 0 0);
  
  /* Secondary: Light Green */
  --secondary: oklch(0.95 0.02 145);
  --secondary-foreground: oklch(0.15 0.02 150);
  
  /* Background & Text */
  --background: oklch(1 0 0);
  --foreground: oklch(0.15 0.02 150);
  
  /* Borders & Inputs */
  --border: oklch(0.90 0.01 145);
  --input: oklch(0.90 0.01 145);
  --ring: oklch(0.65 0.19 145);
}
```


#### **Dark Mode Colors (OKLCH):**

```css
.dark {
  /* Primary: Bright Green for dark mode */
  --primary: oklch(0.70 0.20 145);
  --primary-foreground: oklch(0.15 0.02 150);
  
  /* Accent: Bright Green */
  --accent: oklch(0.75 0.21 142);
  --accent-foreground: oklch(0.15 0.02 150);
  
  /* Background & Text */
  --background: oklch(0.15 0.01 150);
  --foreground: oklch(0.95 0.01 145);
  
  /* Borders & Inputs */
  --border: oklch(0.30 0.02 145);
  --input: oklch(0.30 0.02 145);
}
```


### **7.2 Typography**

```typescript
// Font families (from layout.tsx)
const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })
```

**Usage:**

- Body: Geist Sans
- Code: Geist Mono


### **7.3 Component Library**

**shadcn/ui Components Installed:**

- button
- card
- input
- label
- sidebar
- badge
- separator
- sheet
- tooltip
- dropdown-menu
- avatar
- dialog
- form
- select
- textarea
- popover
- calendar
- checkbox
- radio-group
- switch
- tabs
- toast

***

## **8. COMPONENT ARCHITECTURE**

### **8.1 Layout Hierarchy**

```
RootLayout (app/layout.tsx)
├── ThemeProvider (Dark mode support)
├── SessionProvider (Auth context)
└── Children
    ├── AuthLayout (app/(auth)/layout.tsx)
    │   └── Login/Register Pages
    └── DashboardLayout (app/(dashboard)/layout.tsx)
        └── DashboardShell
            ├── AppSidebar (Navigation)
            └── Main Content
                ├── Topbar (Search, Notifications, Profile)
                └── Page Content
```


### **8.2 Key Components**

#### **1. AppSidebar**

- **Location:** `components/app-sidebar.tsx`
- **Purpose:** Main navigation menu
- **Features:**
    - Collapsible sidebar
    - Green leaf logo
    - Navigation links with icons
    - Hover effects
    - Settings and logout


#### **2. DashboardShell**

- **Location:** `components/dashboard-shell.tsx`
- **Purpose:** Dashboard wrapper with topbar
- **Features:**
    - Search bar
    - Notification bell
    - User avatar
    - Responsive layout


#### **3. ThemeProvider**

- **Location:** `components/theme-provider.tsx`
- **Purpose:** Dark mode context
- **Library:** next-themes


### **8.3 UI Component Patterns**

#### **Button Variants:**

```typescript
// Default (green)
<Button>Click me</Button>

// Destructive (red)
<Button variant="destructive">Delete</Button>

// Outline
<Button variant="outline">Cancel</Button>

// Ghost
<Button variant="ghost">Subtle</Button>
```


#### **Card Pattern:**

```typescript
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    Content here
  </CardContent>
  <CardFooter>
    Footer actions
  </CardFooter>
</Card>
```


***

## **9. API ROUTES \& ENDPOINTS**

### **9.1 Authentication Endpoints** ✅

| Method | Endpoint | Purpose | Status |
| :-- | :-- | :-- | :-- |
| POST | `/api/auth/register` | Create new user | ✅ |
| POST | `/api/auth/signin` | Login user | ✅ |
| GET | `/api/auth/session` | Get current session | ✅ |
| POST | `/api/auth/signout` | Logout user | ✅ |

### **9.2 Planned API Endpoints**

#### **Documents:**

```
GET    /api/documents          # List all documents
POST   /api/documents          # Create document
GET    /api/documents/:id      # Get document
PUT    /api/documents/:id      # Update document
DELETE /api/documents/:id      # Delete document
POST   /api/documents/:id/share # Share document
```


#### **Tasks:**

```
GET    /api/tasks              # List all tasks
POST   /api/tasks              # Create task
GET    /api/tasks/:id          # Get task
PUT    /api/tasks/:id          # Update task
DELETE /api/tasks/:id          # Delete task
POST   /api/tasks/:id/assign   # Assign task
POST   /api/tasks/:id/comment  # Add comment
```


#### **Chat:**

```
GET    /api/channels           # List channels
POST   /api/channels           # Create channel
GET    /api/channels/:id/messages # Get messages
POST   /api/channels/:id/messages # Send message
PUT    /api/messages/:id       # Edit message
DELETE /api/messages/:id       # Delete message
POST   /api/messages/:id/react # Add reaction
```


#### **Team:**

```
GET    /api/workspace          # Get workspace info
POST   /api/workspace/invite   # Invite member
DELETE /api/workspace/members/:id # Remove member
PUT    /api/workspace/members/:id # Update role
```


***

## **10. REAL-TIME FEATURES**

### **10.1 Socket.io Setup (Planned)**

#### **Server Setup:**

**File:** `app/api/socket/route.ts`

```typescript
import { Server as SocketServer } from 'socket.io'
import { Server as HTTPServer } from 'http'

export function initSocketServer(httpServer: HTTPServer) {
  const io = new SocketServer(httpServer, {
    cors: {
      origin: process.env.NEXT_PUBLIC_APP_URL,
      methods: ['GET', 'POST'],
    },
  })

  io.on('connection', (socket) => {
    console.log('User connected:', socket.id)

    // Join workspace room
    socket.on('join:workspace', (workspaceId) => {
      socket.join(`workspace:${workspaceId}`)
    })

    // Chat events
    socket.on('message:send', (data) => {
      io.to(`workspace:${data.workspaceId}`).emit('message:received', data)
    })

    // Typing indicator
    socket.on('typing:start', (data) => {
      socket.to(`workspace:${data.workspaceId}`).emit('user:typing', data)
    })

    // Document collaboration
    socket.on('document:update', (data) => {
      socket.to(`document:${data.documentId}`).emit('document:changed', data)
    })

    // Task updates
    socket.on('task:update', (data) => {
      io.to(`workspace:${data.workspaceId}`).emit('task:changed', data)
    })

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id)
    })
  })

  return io
}
```


#### **Client Hook:**

**File:** `hooks/use-socket.ts`

```typescript
import { useEffect, useState } from 'react'
import { io, Socket } from 'socket.io-client'

export function useSocket() {
  const [socket, setSocket] = useState<Socket | null>(null)
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    const socketInstance = io(process.env.NEXT_PUBLIC_APP_URL!, {
      path: '/api/socket',
    })

    socketInstance.on('connect', () => {
      setIsConnected(true)
    })

    socketInstance.on('disconnect', () => {
      setIsConnected(false)
    })

    setSocket(socketInstance)

    return () => {
      socketInstance.disconnect()
    }
  }, [])

  return { socket, isConnected }
}
```


### **10.2 Real-Time Use Cases**

| Feature | Event Name | Payload | Priority |
| :-- | :-- | :-- | :-- |
| Chat Messages | `message:send` | {channelId, content, userId} | High |
| Typing Indicator | `typing:start` | {channelId, userId, userName} | Medium |
| Document Edits | `document:update` | {documentId, changes, userId} | High |
| Task Updates | `task:update` | {taskId, status, assigneeId} | Medium |
| Online Status | `presence:update` | {userId, status} | Low |
| Notifications | `notification:new` | {type, message, userId} | Medium |


***

## **11. DEVELOPMENT WORKFLOW**

### **11.1 Environment Setup**

#### **Prerequisites:**

```bash
Node.js >= 18.17.0
npm or pnpm
PostgreSQL database
Git
```


#### **Installation:**

```bash
# Clone repository
git clone <repo-url>
cd collabspace

# Install dependencies
npm install

# Setup database
npx prisma generate
npx prisma db push

# Run development server
npm run dev
```


#### **Development URLs:**

- **App:** http://localhost:3000
- **Prisma Studio:** http://localhost:5555 (run `npx prisma studio`)


### **11.2 Git Workflow**

#### **Branch Strategy:**

```
main            # Production-ready code
├── develop     # Integration branch
├── feature/*   # New features
├── bugfix/*    # Bug fixes
└── hotfix/*    # Emergency fixes
```


#### **Commit Convention:**

```
feat: Add chat messaging feature
fix: Resolve login redirect issue
docs: Update README with setup instructions
style: Format code with Prettier
refactor: Restructure auth logic
test: Add unit tests for auth
chore: Update dependencies
```


### **11.3 Code Quality**

#### **ESLint Configuration:**

```json
{
  "extends": "next/core-web-vitals",
  "rules": {
    "no-console": "warn",
    "@typescript-eslint/no-unused-vars": "error"
  }
}
```


#### **TypeScript Strictness:**

```json
{
  "compilerOptions": {
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true
  }
}
```


### **11.4 Testing Strategy (Planned)**

#### **Unit Tests:**

- Framework: Jest + React Testing Library
- Coverage target: 80%
- Test files: `*.test.ts` or `*.test.tsx`


#### **E2E Tests:**

- Framework: Playwright
- Critical paths: Auth flow, document creation, task management

***

## **12. DEPLOYMENT GUIDE**

### **12.1 Vercel Deployment (Recommended)**

#### **Prerequisites:**

1. GitHub/GitLab repository
2. Vercel account
3. PostgreSQL database (Vercel Postgres or Supabase)

#### **Steps:**

**1. Connect Repository:**

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel
```

**2. Configure Environment Variables:**
In Vercel Dashboard → Project → Settings → Environment Variables:

```env
DATABASE_URL=postgresql://...
NEXTAUTH_URL=https://your-domain.vercel.app
NEXTAUTH_SECRET=<generate-with-openssl>
```

**3. Build Settings:**

- Framework Preset: Next.js
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`


#### **Production Checklist:**

- [ ] Set up production database
- [ ] Configure environment variables
- [ ] Run database migrations
- [ ] Test authentication flow
- [ ] Enable HTTPS
- [ ] Configure custom domain
- [ ] Set up monitoring (Vercel Analytics)


### **12.2 Alternative Deployment Options**

#### **Docker:**

```dockerfile
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npx prisma generate
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```


#### **AWS / DigitalOcean:**

- Use PM2 for process management
- Nginx as reverse proxy
- SSL with Let's Encrypt

***

## **13. ENVIRONMENT VARIABLES**

### **13.1 Required Variables**

**File:** `.env.local`

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/collabspace"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="generate-with-openssl-rand-base64-32"

# OAuth Providers (Optional)
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
GITHUB_CLIENT_ID=""
GITHUB_CLIENT_SECRET=""

# File Storage (Optional)
BLOB_READ_WRITE_TOKEN=""  # Vercel Blob
AWS_ACCESS_KEY_ID=""
AWS_SECRET_ACCESS_KEY=""
AWS_REGION="us-east-1"
AWS_S3_BUCKET=""

# Email (Optional)
SMTP_HOST=""
SMTP_PORT="587"
SMTP_USER=""
SMTP_PASSWORD=""
SMTP_FROM="noreply@collabspace.com"

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=""
SENTRY_DSN=""

# App Config
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXT_PUBLIC_APP_NAME="CollabSpace"
```


### **13.2 Generate Secrets**

```bash
# NEXTAUTH_SECRET
openssl rand -base64 32

# Or use Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```


***

## **14. TROUBLESHOOTING \& COMMON ISSUES**

### **14.1 Authentication Issues**

#### **Issue:** "NEXTAUTH_URL not set"

**Solution:**

```env
# Add to .env.local
NEXTAUTH_URL="http://localhost:3000"
```


#### **Issue:** Session not persisting

**Solution:**

1. Clear browser cookies
2. Check NEXTAUTH_SECRET is set
3. Verify database connection
4. Check middleware.ts configuration

#### **Issue:** Password not matching on login

**Solution:**

1. Ensure bcrypt is installed
2. Check password is hashed during registration
3. Verify password comparison in authorize function

### **14.2 Database Issues**

#### **Issue:** Prisma Client not generated

**Solution:**

```bash
npx prisma generate
```


#### **Issue:** Migration failed

**Solution:**

```bash
# Reset database
npx prisma migrate reset

# Push schema
npx prisma db push
```


#### **Issue:** Connection pool timeout

**Solution:**

```env
# Add to DATABASE_URL
?connection_limit=10&pool_timeout=20
```


### **14.3 Styling Issues**

#### **Issue:** Tailwind classes not working

**Solution:**

1. Check `globals.css` is imported in `layout.tsx`
2. Verify CSS variables are defined
3. Clear `.next` cache: `rm -rf .next`

#### **Issue:** Dark mode not switching

**Solution:**

1. Check ThemeProvider is wrapping app
2. Verify next-themes is installed
3. Check `.dark` class is being applied

### **14.4 Build Errors**

#### **Issue:** "Module not found"

**Solution:**

```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run dev
```


#### **Issue:** Type errors in production

**Solution:**

```bash
# Run type check
npx tsc --noEmit

# Fix errors and rebuild
npm run build
```


***

## **15. FUTURE ROADMAP**

### **15.1 Phase 1: MVP** (Current)

- [x] Authentication system
- [x] Dashboard shell
- [x] Green theme design
- [ ] Workspace overview page


### **15.2 Phase 2: Core Features** (Next 2-4 weeks)

- [ ] Documents with rich text editor
- [ ] Tasks with Kanban board
- [ ] Real-time chat (WebSocket setup)
- [ ] Basic team management


### **15.3 Phase 3: Collaboration** (4-6 weeks)

- [ ] Real-time document collaboration
- [ ] File uploads and attachments
- [ ] Notifications system
- [ ] Search functionality


### **15.4 Phase 4: Advanced Features** (2-3 months)

- [ ] Video/audio calls (WebRTC)
- [ ] Calendar integration
- [ ] Email integration
- [ ] Mobile app (React Native)


### **15.5 Phase 5: Enterprise** (3+ months)

- [ ] SSO integration
- [ ] Advanced analytics
- [ ] API for third-party integrations
- [ ] White-labeling options
- [ ] Self-hosting option

***

## **16. APPENDIX**

### **16.1 Useful Commands**

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint

# Database
npx prisma studio        # Open Prisma Studio
npx prisma generate      # Generate Prisma Client
npx prisma db push       # Push schema to database
npx prisma migrate dev   # Create migration
npx prisma migrate reset # Reset database

# Deployment
vercel                   # Deploy to Vercel
vercel --prod            # Deploy to production

# Utilities
npm run type-check       # Check TypeScript types
npm run format           # Format with Prettier
npm run clean            # Remove .next and node_modules
```


### **16.2 Key Resources**

- **Next.js Docs:** https://nextjs.org/docs
- **NextAuth.js:** https://authjs.dev
- **Prisma Docs:** https://www.prisma.io/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **shadcn/ui:** https://ui.shadcn.com
- **Socket.io:** https://socket.io/docs


### **16.3 Project Contacts**

- **Developer:** [Your Name]
- **Repository:** [GitHub URL]
- **Email:** [Your Email]
- **Started:** January 2, 2026
- **Status:** Active Development

***

## **17. CHANGELOG**

### **Version 1.0.0** (January 3, 2026)

- ✅ Initial project setup with Next.js 15
- ✅ Authentication system with NextAuth
- ✅ Green theme implementation (OKLCH colors)
- ✅ Dashboard shell with sidebar
- ✅ User registration and login
- ✅ Protected routes with middleware
- ✅ Responsive design with Tailwind CSS v4
- ✅ Dark mode support

***

**📝 DOCUMENT END**

This document serves as the complete reference for the CollabSpace project. Keep it updated as features are implemented and the project evolves.

**Last Updated:** January 3, 2026, 11:18 PM IST
**Document Version:** 1.0.0

***

This comprehensive documentation covers everything about your CollabSpace app! It includes:

✅ Complete tech stack details[^5][^6]
✅ All current and planned features[^2][^1]
✅ Database schemas (current + planned)
✅ Authentication flow
✅ Green theme design system
✅ Component architecture
✅ Real-time implementation plans[^1]
✅ Deployment guides
✅ Troubleshooting section
✅ Development workflow
✅ Future roadmap

You can save this as `PROJECT_DOCUMENTATION.md` in your repository root. If you lose our conversation, this document will help you continue exactly where we left off! 🚀

Would you like me to add or expand any section?
<span style="display:none">[^10][^7][^8][^9]</span>

<div align="center">⁂</div>

[^1]: https://www.groovyweb.co/blog/nexwave-immersive-real-time-collaboration-tools-in-next-js/

[^2]: https://reclaim.ai/blog/collaboration-platforms

[^3]: https://www.workfromcoffee.com/blog/nextjs-hackathon-highest-quality-apps.mdx

[^4]: https://monday.com/blog/rnd/software-development-collaboration-tools/

[^5]: https://nextjs.org/blog/next-15

[^6]: https://softwaremill.com/modern-full-stack-application-architecture-using-next-js-15/

[^7]: https://nextjs.org

[^8]: https://javascript.plainenglish.io/nextjs-15-features-b30d575f8dd7

[^9]: https://dev.to/fonyuygita/understanding-nextjs-15-a-complete-guide-for-react-developers-part-1-1o5m

[^10]: https://www.imaginarycloud.com/blog/tech-stack-software-development

