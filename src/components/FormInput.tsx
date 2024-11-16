'use client'

import { CiCirclePlus } from "react-icons/ci";
import { useState } from "react"

interface FormInputProps {
    addTask: (task: string) => void;
}

export const FormInput: React.FC<FormInputProps> = ({ addTask }) => {

    const [userInput, setUserInput] = useState<string>('')


    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setUserInput(e.target.value)
    }

    const handleAddTask = (e: React.FormEvent) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput('')
    }

    return (
        <div className="justify-between px-2 bg-slate-700 rounded-xl">
            <form onSubmit={handleAddTask} className="flex">
                <input type="text"  onChange={handleChange} className="p-2 rounded-xl bg-transparent w-full outline-none text-white" placeholder="What need to be done?" value={userInput}/>
                <button className="pr-2 hover:text-green-500 transition-colors duration-200"><CiCirclePlus size={30} type="submit"/></button>
            </form>
        </div>
    )
}
