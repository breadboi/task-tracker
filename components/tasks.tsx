'use client';
import { useState } from "react";
import { Task } from "@/types/task";

interface TaskProps {
  task: Task;
}

const TaskItem: React.FC<TaskProps> = ({ task }) => {
  const [completed, setCompleted] = useState(task.completed);

  const handleCheckboxChange = async () => {
    try {
      const response = await fetch(`/api/tasks/${task.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setCompleted(!completed);
      } else {
        console.error("Failed to mark task as complete");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={`flex items-center ${completed ? "text-green-500 line-through" : ""}`}>
      <input
        type="checkbox"
        checked={completed}
        onChange={handleCheckboxChange}
        className="mr-4"
      />
      <p>{task.description}</p>
    </div>
  );
};

interface TasksProps {
  tasks: Task[];
}

const Tasks: React.FC<TasksProps> = ({ tasks }) => {
  return (
    <div className="flex flex-col">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Tasks;
