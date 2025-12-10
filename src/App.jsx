import { useState } from 'react'

function App() {
  
  return (
   <>
    <h1 className="text-lg font-bold">
      Welcome to the Calculator App!
    </h1>

    <div className="calculator m-4 p-4 border flex flex-col rounded-lg shadow-lg bg-stone-200"> 
      {/* Calculator UI will go here */}
      <div id="display bg-stone-800 w-28 p-4">
        {/* Display area for calculator */}
      </div>
      <div id="buttons" className="grid grid-col-4">
        <button className="bg-stone-800 text-white p-4 rounded-lg">7</button>
        <button className="bg-stone-800 text-white p-4 rounded-lg">8</button>
        <button className="bg-stone-800 text-white p-4 rounded-lg">9</button>
        <button className="bg-orange-500 text-white p-4 rounded-lg">/</button>
        <button className="bg-stone-800 text-white p-4 rounded-lg">4</button>
        <button className="bg-stone-800 text-white p-4 rounded-lg">5</button>
        <button className="bg-stone-800 text-white p-4 rounded-lg">6</button>
        <button className="bg-orange-500 text-white p-4 rounded-lg">*</button>
        <button className="bg-stone-800 text-white p-4 rounded-lg">1</button>
        <button className="bg-stone-800 text-white p-4 rounded-lg">2</button>
        <button className="bg-stone-800 text-white p-4 rounded-lg">3</button>
        <button className="bg-orange-500 text-white p-4 rounded-lg">-</button>
        <button className="bg-stone-800 text-white p-4 rounded-lg">0</button>
        <button className="bg-stone-800 text-white p-4 rounded-lg">.</button>
        <button className="bg-green-500 text-white p-4 rounded-lg col-span-2">=</button>
      </div>
    </div>
   </>
  )
}

export default App
