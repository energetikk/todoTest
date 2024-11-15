'use client'

import { TaskItem } from '@/components/TaskItem';
export function TodoList({task, deleteTask, taskDone}) {



  return (
    <main className="flex flex-col w-96 gap-2">
      {task.map((el) => {
        return (
          <TaskItem title={el.title} key={el.id} deleteTaskBtn={() => deleteTask(el.id)} task={task} taskDoneComplete={() => taskDone(el.id)} isCompleted={el.isCompleted}/>
        )
      })}
    </main>
  );
}
