'use client'


import { TodoList } from "@/components/TodoList";
import { FormItem } from "@/components/FormItem";
import { Footer } from "@/components/footer";
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
      title: imputTask
    }
  setTask([...task, newTask])
   
  }
  }

  return (
    <div>
      <FormItem addTask={addTask}/>
      {/* <TodoList task={task}/> */}
      <TodoList task={task} deleteTask={deleteTask}/>
      <Footer />
    </div>
  );


}
