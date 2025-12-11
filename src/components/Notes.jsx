import React from 'react'

const Notes = () => {

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

  return (

    <section id="notes" className="items-center justify-center flex flex-col mt-8">
        <h1 className="text-lg text-center mt-8 font-bold mb-8">
            Welcome to my notes app heheh!
        </h1>

        <input
        className="w-full p-4 mb-8 px-6 ring bg-stone-500 rounded-full border-none mt-8 text-white" 
        type="text" 
        placeholder="Add a new note to this site!"
        value={inputValue}
        onChange= {(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyPress}
        >
        
        </input>

        <div className="md:w-2/3 w-full p-4 flex flex-col mt-4 border border-stone-900 rounded-lg shadow-lg bg-stone-800">

        </div>
    </section>
  )
}

export default Notes