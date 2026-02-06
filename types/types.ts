import {
  Priority,
  TaskAssignee,
  TaskStatus,
  User,
  Workspace,
} from "@prisma/client";
import { ThemeProviderProps as NextThemesProviderProps } from "next-themes";

export interface ThemeProviderProps extends NextThemesProviderProps {
  children: React.ReactNode;
}

export interface TaskProps {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: Priority;
  dueDate: Date;
  creatorId: string;
  creator: User;
  workspaceId: string;
  workspace: Workspace;
  createdAt: Date;
  updatedAt: Date;
  comments: Comment[];
  assignees: TaskAssignee[];
}
