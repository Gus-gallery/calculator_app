import React from 'react'
import { useState } from 'react'

const Todo = () => {
    const [inputValue, setInputValue] = useState("");
    const [tasks, setTasks] = useState([]);

    function handleKeyPress(e) {
        if (e.key === 'Enter' && inputValue.trim() !== "") {
            setTasks([...tasks, inputValue.trim()]);
            setInputValue("");
        }
    }

    function handleDeleteTask(index) {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    }

  return (
    <section id="todo" className="items-center justify-center flex flex-col mt-8">
        <h1 className="text-lg text-center mt-8 font-bold mb-8">
            Welcome to the To-Do List App!
        </h1>

        <div className="md:w-2/3 w-full p-4 flex flex-col mt-4 border border-stone-900 rounded-lg shadow-lg bg-stone-800">
            <h2 className="text-center font-semibold p-4">
                What do you want to accomplish today?
            </h2>
            <input 
            className="w-full p-4 mb-8 px-6 bg-stone-500 rounded-full border-none mt-8 text-white" 
            type="text" 
            placeholder="Add a new task..."
            value={inputValue}
            onChange= {(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
            />

            <div className="mt-4 flex flex-col gap-4">
                {tasks.map((task, index) => (
                    <div key={index} className="bg-stone-700 text-white p-4 rounded-lg flex justify-between items-center">
                        {task}
                        <button 
                        className="bg-stone-400 rounded-full w-6 h-6 flex items-center justify-center text-stone-800 font-bold hover:bg-stone-50"
                        onClick={() => handleDeleteTask(index)}>
                            x
                        </button>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Todo