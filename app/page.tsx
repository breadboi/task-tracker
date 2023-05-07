'use client';
import Tasks from '@/components/tasks';
import { Task } from '@/types/task';
import { Tabs, Spinner } from 'flowbite-react';
import { useEffect, useState } from 'react';

const TasksPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch('/api/tasks');
      const data = await response.json();
      setTasks(data.tasks);
    };
    fetchTasks();
  }, []);

  return (
    <>
      {tasks.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <Spinner
            aria-label="Loading"
            size="xl"
          />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h1 className="text-2xl font-bold mb-4">Household Tasks</h1>
            <Tabs.Group
              aria-label="Pills"
              style="pills"
            >
              <Tabs.Item
                active={true}
                title="Brett"
              >
                <Tasks tasks={tasks.filter((task) => task.owner_first_name === "Brett")} />
              </Tabs.Item>

              <Tabs.Item title="Julie">
                <Tasks tasks={tasks.filter((task) => task.owner_first_name === "Julie")} />
              </Tabs.Item>

            </Tabs.Group>
          </div>
        </div>
      )}
    </>
  );
};

export default TasksPage;
