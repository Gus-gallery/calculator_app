import React from 'react'
import { useState } from 'react'

const Notes = () => {
    const [inputValue, setInputValue] = useState("");
    const [notes, setNotes] = useState([]);

    const randomColors = [
        "bg-yellow-200",
        "bg-green-200",
        "bg-blue-200",
        "bg-pink-200",
        "bg-purple-200",
        "bg-orange-200"
    ]

    const getRandomColor = () => {
        const randomIndex = Math.floor(Math.random() * randomColors.length);
        return randomColors[randomIndex];
    }

    function handleKeyPress(e) {
        if (e.key === 'Enter' && inputValue.trim() !== "") {
            setNotes([...notes, inputValue.trim()]);
            setInputValue("");
        }
    }

    function handleDeleteNote(index) {
        const newNotes = notes.filter((_, i) => i !== index);
        setNotes(newNotes);
    }

    function handleDragStart(e, index) {
        e.dataTransfer.setData("noteIndex", index);
    }

    function handleDragOver(e) {
        e.preventDefault(); 
    }

    function handleDrop(e, dropIndex) {
        const dragIndex = parseInt(e.dataTransfer.getData("noteIndex"));

        if (dragIndex === dropIndex) return; // ingen flytning

        const updatedNotes = [...notes];
        const draggedItem = updatedNotes[dragIndex];

        updatedNotes.splice(dragIndex, 1);

        updatedNotes.splice(dropIndex, 0, draggedItem);

        setNotes(updatedNotes);
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
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
            />

            <div className="w-full p-4 gap-4 flex flex-wrap flex-row mt-4 border rounded-lg shadow-lg">
                {notes.map((note, index) => (
                    <div
                        key={index}
                        draggable
                        onDragStart={(e) => handleDragStart(e, index)}
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDrop(e, index)}
                        className={`${getRandomColor()} text-stone-900 px-4 rounded-lg flex flex-col justify-between items-center cursor-move`}
                    >
                        <div className="w-full rounded-full mb-2 bg-yellow-600 h-1"/>
                        <div className="mb-2 h-30 flex-row flex justify-between w-full">
                            {note}
                            <button 
                                className="bg-yellow-400 rounded-full w-6 h-6 ml-4 flex justify-center text-stone-800 font-bold hover:bg-yellow-300"
                                onClick={() => handleDeleteNote(index)}
                            >
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
