import { TaskProps } from "@/types/types";
import { format } from "date-fns";
import { CrossIcon, PlusIcon } from "lucide-react";
import { Button } from "../ui/button";

interface TaskDialogueProps {
  taskDialogueOpen: boolean;
  setTaskDialogueOpen: (open: boolean) => void;
  task: TaskProps;
}

export default function TaskDialogue({
  taskDialogueOpen,
  setTaskDialogueOpen,
  task,
}: TaskDialogueProps) {
  if (!taskDialogueOpen) return null;
  console.log(task);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-background p-6 rounded-lg shadow-lg max-w-md w-full border border-border">
        <PlusIcon
          className="absolute right-4 top-4 cursor-pointer rotate-45
           hover:text-red-600 w-8 h-8 hover:w-10 hover:h-10 
           transition-all duration-300"
          onClick={() => setTaskDialogueOpen(false)}
        />
        <h2 className="text-xl font-bold mb-4">{task.title}</h2>
        <p className="text-muted-foreground mb-4">{task.description}</p>
        <div className="flex justify-between mt-4 border-t pt-4 ">
          <div className="flex flex-col gap-2 text-sm text-muted-foreground border-r pr-4">
            <p>Status: {task.status.toLowerCase().replace("_", " ")}</p>
            <p>Priority: {task.priority.toLowerCase().replace("_", " ")}</p>
            <p>
              Due Date:{" "}
              {task.dueDate
                ? format(new Date(task.dueDate), "MMM d, yyyy")
                : "No due date"}
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <p>Created By: {task.creator.name}</p>
            <p>
              Created On:{" "}
              {task.createdAt
                ? format(new Date(task.createdAt), "MMM d, yyyy")
                : "No due date"}
            </p>
            <p>Workspace Name: {task.workspace.name}</p>
          </div>
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <Button variant="outline" className="cursor-pointer">
            Edit
          </Button>
          <Button
            variant="destructive"
            className="cursor-pointer"
            onClick={async () => {
              const res = await fetch(`/api/v1/tasks/${task.id}`, {
                method: "DELETE",
              });
              if (res.ok) {
                setTaskDialogueOpen(false);
              }
            }}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}
