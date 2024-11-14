export function TaskItem({title, deleteTaskBtn, task}) {





  return (


    <div className="flex justify-between border border-red-500">
        <p className="">{title}</p>
        <button onClick={deleteTaskBtn} className="border-1 bg-purple-700">Del</button>
    </div>
  );
}