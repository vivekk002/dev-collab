"use client";

import { PlusIcon } from "lucide-react";
import {
  Field,
  FieldGroup,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from "../ui/field";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useState } from "react";
import { DatePicker } from "../ui/date-picker";
import { Button } from "../ui/button";

interface AddTaskDialogueProps {
  addTaskDialogueOpen: boolean;
  setAddTaskDialogueOpen: (open: boolean) => void;
}

export default function AddTaskDialogue({
  addTaskDialogueOpen,
  setAddTaskDialogueOpen,
}: AddTaskDialogueProps) {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-background p-6 rounded-lg shadow-lg max-w-md w-full border border-border">
        <PlusIcon
          className="absolute right-4 top-4 cursor-pointer rotate-45
           hover:text-red-600 w-8 h-8 hover:w-10 hover:h-10 
           transition-all duration-300"
          onClick={() => setAddTaskDialogueOpen(false)}
        />
        <h1 className="text-2xl font-semibold text-center mb-4 text-primary">
          Add a new Task
        </h1>
        <div>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldTitle>Title of the task</FieldTitle>
                <Input />
              </Field>
              <Field>
                <FieldTitle>Description of the task</FieldTitle>
                <Input />
              </Field>
              <Field>
                <FieldTitle>Due Date of the task</FieldTitle>
                <DatePicker date={date} setDate={setDate} />
              </Field>
              <Field>
                <FieldTitle>Priority of the task</FieldTitle>

                <Select>
                  <SelectTrigger className="w-full border border-border rounded-md p-2 text-left">
                    <SelectValue placeholder="Select a priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="urgent">Urgent</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
              <Field>
                <FieldTitle>Workspace</FieldTitle>
                <Input />
              </Field>
            </FieldGroup>
          </FieldSet>
        </div>
        <Button variant="outline" className="w-full mt-8">
          Submit
        </Button>
      </div>
    </div>
  );
}
