"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Task } from "@prisma/client";
import { format } from "date-fns";
import { Calendar } from "lucide-react";
import { Badge } from "../ui/badge";
import TaskDialogue from "./task-dialogue";
import { TaskProps } from "@/types/types";

export default function TaskCard() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [taskDialogueOpen, setTaskDialogueOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<TaskProps>();

  const fetchTasks = async () => {
    const res = await fetch("/api/v1/tasks");
    const data = await res.json();

    setTasks(data);
  };
  useEffect(() => {
    fetchTasks();
  }, []);
  return (
    <>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4"
        onClick={fetchTasks}
      >
        {tasks.map((task) => {
          return (
            <Card
              onClick={() => {
                setSelectedTask(task);
                setTaskDialogueOpen(true);
              }}
              key={task.id}
              className="border rounded-lg p-4 shadow-sm hover:shadow-lg transition-shadow  cursor-pointer"
            >
              <CardHeader>
                <CardTitle>{task.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{task.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center text-sm">
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>
                    {task.dueDate
                      ? format(new Date(task.dueDate), "MMM d, yyyy")
                      : "No due date"}
                  </span>
                </div>
                <Badge
                  variant={task.status === "COMPLETED" ? "default" : "outline"}
                >
                  {task.status}
                </Badge>
              </CardFooter>
            </Card>
          );
        })}
      </div>
      {selectedTask && (
        <TaskDialogue
          taskDialogueOpen={taskDialogueOpen}
          setTaskDialogueOpen={setTaskDialogueOpen}
          task={selectedTask}
        />
      )}
    </>
  );
}
