'use client'

import { TodoList } from "@/components/TodoList";
import { FormInput } from "@/components/FormInput";
// import { Footer } from "@/components/footer";
import { useState } from 'react';

interface INewTask {
  id: number,
  title: string,
  isCompleted: boolean
}

export default function Home() {


  const [task, setTask] = useState<INewTask[]>([])

  const deleteTask = (id: number) => {
    setTask([...task.filter((todo) => todo.id !== id)])
  }

  function addTask(inputTask: string) {
    if (inputTask) {
      const newTask: INewTask = {
        id: Date.now(),
        title: inputTask,
        isCompleted: false
      }
      setTask([newTask, ...task])
    }
  }

  const taskDone = (id: number) => {
    const copy = [...task]
    const currentTask: INewTask | undefined = copy.find((todo) => todo.id === id);
    if (currentTask) {
      currentTask.isCompleted = !currentTask.isCompleted;
      setTask(copy);
    }
  }

  console.log(task)

  return (
    <div className="flex flex-col">
      <FormInput addTask={addTask} />
      <TodoList task={task} deleteTask={deleteTask} taskDone={taskDone} />
      {/* <Footer task={task}/> */}
    </div>
  );
}
