import { FaCheck } from "react-icons/fa";

export function CheckButton({taskDoneComplete, isCompleted}) {


    return (
        <div className="pl-2">
            <button onClick={taskDoneComplete} className={`relative border-2 border-gray-600 hover:border-gray-800 transition-colors easy-in-out duration-200 rounded-full w-7 h-7 ${ isCompleted ? 'bg-green-600 border-green-600' : ''}`}>
                <FaCheck size={15} className={`absolute top-1 left-1 text-gray-700 hover:text-gray-600 transition-colors duration-200 easy-in-out${ isCompleted ? 'text-green-700' : ''}`}/>
            </button>
        </div>
    )
}


