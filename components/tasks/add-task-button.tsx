"use client";

import { Button } from "../ui/button";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import AddTaskDialogue from "./add-task-dialoge";

export default function AddTaskButton() {
  const [addTaskDialogueOpen, setAddTaskDialogueOpen] = useState(false);
  return (
    <>
      <Button
        className="flex items-center gap-2 "
        variant="outline"
        onClick={() => {
          setAddTaskDialogueOpen(true);
        }}
      >
        Add Task <PlusIcon />
      </Button>
      {addTaskDialogueOpen && (
        <AddTaskDialogue
          addTaskDialogueOpen={addTaskDialogueOpen}
          setAddTaskDialogueOpen={setAddTaskDialogueOpen}
        />
      )}
    </>
  );
}
