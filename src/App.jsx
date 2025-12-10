import { useState } from 'react'

function App() {
  const [display, setDisplay] = useState('0')
  
  function handleClick(value) {
    // Logic to handle button clicks will go here
    if (display === '0') {
      setDisplay(value);
      return;
    }

    setDisplay(display + value);
  }

  function reset() {
    setDisplay('0');
  }

  function calculate() {
    try {
      const result = Function("return " + display)();
      setDisplay(String(result));
    } catch {
      setDisplay('Error');
    }
  }

  return (
   <>
    <h1 className="text-lg text-center mt-8 font-bold">
      Welcome to the Calculator App!
    </h1>

    <div className="calculator m-4 p-4 border border-stone-900 flex flex-col rounded-lg shadow-lg bg-stone-200"> 
      {/* Calculator UI will go here */}
      <div id="display" className="bg-white text-right p-4 rounded-lg text-2xl font-mono">
        {display}
      </div>
      <div id="buttons" className="grid grid-cols-5 gap-4 mt-4 cursor-pointer">
        <button onClick={() => handleClick("7")} className="bg-stone-800 text-white p-4 rounded-lg">7</button>
        <button onClick={() => handleClick("8")} className="bg-stone-800 text-white p-4 rounded-lg">8</button>
        <button onClick={() => handleClick("9")} className="bg-stone-800 text-white p-4 rounded-lg">9</button>
        <button onClick={() => handleClick("/")} className="bg-orange-500 text-white p-4 rounded-lg">/</button>
        <button onClick={() => handleClick("*")} className="bg-orange-500 text-white p-4 rounded-lg">*</button>

        <button onClick={() => handleClick("4")} className="bg-stone-800 text-white p-4 rounded-lg">4</button>
        <button onClick={() => handleClick("5")} className="bg-stone-800 text-white p-4 rounded-lg">5</button>
        <button onClick={() => handleClick("6")} className="bg-stone-800 text-white p-4 rounded-lg">6</button>
        <button onClick={() => handleClick("-")} className="bg-orange-500 text-white p-4 rounded-lg">-</button>
        <button onClick={() => handleClick("+")} className="bg-orange-500 text-white p-4 rounded-lg">+</button>

        <button onClick={() => handleClick("1")} className="bg-stone-800 text-white p-4 rounded-lg">1</button>
        <button onClick={() => handleClick("2")} className="bg-stone-800 text-white p-4 rounded-lg">2</button>
        <button onClick={() => handleClick("3")} className="bg-stone-800 text-white p-4 rounded-lg">3</button>

        <button onClick={calculate} className="bg-green-700 text-white p-4 rounded-lg">=</button>
        <button onClick={reset} className="bg-red-700 text-white p-4 rounded-lg">C</button>

        <button onClick={() => handleClick("0")} className="bg-stone-800 text-white p-4 rounded-lg">0</button>
        <button onClick={() => handleClick(".")} className="bg-stone-800 text-white p-4 rounded-lg">.</button>
      
      </div>
    </div>
   </>
  )
}

export default App
