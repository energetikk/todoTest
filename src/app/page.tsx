'use client'


import { TodoList } from "@/components/TodoList";
import { FormInput } from "@/components/FormInput";
// import { Footer } from "@/components/footer";
import { useState } from 'react';

export default function Home() {


  const [task, setTask] = useState([])
  
  const deleteTask = (id) => {
    setTask([...task.filter((todo) => todo.id !== id)])
  }

  function addTask(imputTask) {
    if (imputTask) {
      const newTask = {
        id: Date.now(),
        title: imputTask,
        isCompleted: false
      }
      setTask([newTask, ...task])
    }
  }

  const taskDone = (id) => {
    const copy = [...task]
    const currentTask = copy.find((todo) => todo.id === id);
    currentTask.isCompleted = !currentTask.isCompleted
    setTask(copy)
  }

  console.log(task)

  return (
    <div className="flex flex-col">
      <FormInput addTask={addTask} />
      <TodoList task={task} deleteTask={deleteTask} taskDone={taskDone}/>
      {/* <Footer task={task}/> */}
    </div>
  );


}
