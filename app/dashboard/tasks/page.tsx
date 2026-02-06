import AddTaskButton from "@/components/tasks/add-task-button";
import Filters from "@/components/tasks/filters";
import TaskCard from "@/components/tasks/task-card";

export default function TasksPage() {
  return (
    <div>
      <div className="flex justify-between items-center border-b pb-5">
        <Filters />
        <AddTaskButton />
      </div>
      <div>
        <TaskCard />
      </div>
    </div>
  );
}
