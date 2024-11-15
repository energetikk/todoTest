import { BsTrash } from "react-icons/bs";
import { CheckButton } from '@/components/CheckButton'
export function TaskItem({ title, deleteTaskBtn, taskDoneComplete, isCompleted }) {





  return (

    <div>
      <div className="flex justify-between items-center rounded-xl mt-5 bg-slate-700">
        <CheckButton taskDoneComplete={taskDoneComplete} isCompleted={isCompleted}/>
        <p className="text-white p-3 px-4">{title}</p>
        <div >
          <BsTrash onClick={deleteTaskBtn} size={20} className="text-black hover:text-red-600 transition-colors ease-in-out duration-300 mr-5" />
        </div>
      </div>

    </div>
  );
}