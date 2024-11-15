'use client'

import { CiCirclePlus } from "react-icons/ci";
import { useState } from "react"

export const FormInput = ({ addTask }) => {

    const [userInput, setUserInput] = useState('')


    function handleChange(e) {
        setUserInput(e.target.value)
    }

    const handleAddTask = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput('')
    }

    return (
        // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="justify-between px-2 bg-slate-700 rounded-xl">
            <form onSubmit={handleAddTask} className="flex">
                <input type="text"  onChange={handleChange} className="p-2 rounded-xl bg-transparent w-full outline-none text-white" placeholder="What need to be done?" value={userInput}/>
                {/* <button  className="w-24 rounded-sm hover:text-red-500 bg-green-400 hover:bg-green-700">ADD</button> */}
                <button className="pr-2 hover:text-green-500 transition-colors duration-200"><CiCirclePlus size={30} type="submit"/></button>
            </form>
        </div>
    )
}
