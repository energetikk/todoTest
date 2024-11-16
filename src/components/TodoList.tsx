'use client'

import { TaskItem } from '@/components/TaskItem';

interface ITask {
  id: number;
  title: string;
  isCompleted: boolean;
}

interface TodoListProps {
  task: ITask[],
  deleteTask: (id: number) => void,
  taskDone: (id: number) => void
}

export function TodoList({task, deleteTask, taskDone}: TodoListProps) {

  return (
    <main className="flex flex-col w-96 gap-2">
      {task.map((el) => {
        return (
          <TaskItem title={el.title} key={el.id} deleteTaskBtn={() => deleteTask(el.id)} taskDoneComplete={() => taskDone(el.id)} isCompleted={el.isCompleted}/>
        )
      })}
    </main>
  );
}
