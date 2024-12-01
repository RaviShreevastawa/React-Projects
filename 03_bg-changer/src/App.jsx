import { useState } from 'react'

function App() {
  const [Color, setColor] = useState("olive")
  return (
     <div className='w-full h-screen duration-200'
        style={{backgroundColor : Color}}
      >
        <div className='flex flex-wrap fixed bottom-10 justify-center inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg' style={{backgroundColor : {setColor}}}> 
            <button
            onClick={() => setColor("red")}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
            style={{backgroundColor: "red"}}
            >Red</button>
            <button
            onClick={() => setColor("green")}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
            style={{backgroundColor: "Green"}}
            >Green</button>
            <button
            onClick={() => setColor("blue")}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
            style={{backgroundColor: "blue"}}
            >Blue</button>
            <button
            onClick={() => setColor("yellow")}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
            style={{backgroundColor: "yellow"}}
            >Yellow</button>
            <button
            onClick={() => setColor("orange")}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
            style={{backgroundColor: "orange"}}
            >Orange</button>
            <button
            onClick={() => setColor("aqua")}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
            style={{backgroundColor: "aqua"}}
            >Aqua</button>
            <button
            onClick={() => setColor("skyblue")}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
            style={{backgroundColor: "skyblue"}}
            >skyblue</button>
          </div>
        </div>
     </div>
  )
}

export default App
