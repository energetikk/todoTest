'use client'

import { TaskItem } from '@/components/TaskItem';
export function TodoList({task, deleteTask}) {



  return (
    <main>
      <div className="flex flex-col gap-2">
      {task.map((el) => {
        return (
          <TaskItem title={el.title} key={el.id} deleteTaskBtn={() => deleteTask(el.id)} task={task}/>
        )
      })}
      </div>
    </main>
  );
}
