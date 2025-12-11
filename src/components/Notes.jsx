import React from 'react'
import { useState } from 'react'

const Notes = () => {
    const [inputValue, setInputValue] = useState("");
    const [notes, setTasks] = useState([]);


    function handleKeyPress(e) {
        if (e.key === 'Enter' && inputValue.trim() !== "") {
            setTasks([...notes, inputValue.trim()]);
            setInputValue("");
        }
    }

    function handleDeleteNote(index) {
        const newNotes = notes.filter((_, i) => i !== index);
        setTasks(newNotes);
    }

    function handleDragStart(e, index) {
        e.dataTransfer.setData("noteIndex", index);
    }

    function handleDragEnd(e) {
        e.preventDefault();
    }

  return (

    <section id="notes" className="items-center justify-center flex flex-col mt-8">
        <h1 className="text-lg text-center mt-8 font-bold mb-8">
            Welcome to my notes app heheh!
        </h1>

        <input
        className="w-1/2 p-4 mb-8 px-6 ring bg-stone-500 rounded-full border-none mt-8 text-white" 
        type="text" 
        placeholder="Add a new note to this site!"
        value={inputValue}
        onChange= {(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyPress}
        />

        <div className="w-full p-4 gap-4 flex flex-row mt-4 border rounded-lg shadow-lg">
            {notes.map((note, index) => (
                <div key={index} onClick={handleDragStart} className="bg-stone-700 text-white px-4 rounded-lg flex flex-col justify-between items-center">
                    <div className="w-full rounded-full mb-2 bg-stone-400 h-1"/>
                    <div className="mb-2 flex-row flex justify-between w-full">
                    {note}
                    <button 
                    className="bg-stone-400 rounded-full w-6 h-6 ml-4 flex justify-center text-stone-800 font-bold hover:bg-stone-50"
                    onClick={() => handleDeleteNote(index)}>
                        x
                    </button>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Notes