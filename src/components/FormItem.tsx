'use client'

import { useState } from "react"

export const FormItem = ({addTask}) => {
    
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
        <div className="">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <form onSubmit={handleAddTask}>
                    <input type="text" placeholder="What need to be done?" value={userInput} onChange={handleChange} className="border" />
                    <button type="submit" className="w-24 rounded-sm hover:text-red-500 bg-green-400 hover:bg-green-700">ADD</button>
                </form>
            </main>
        </div>
    )
}


