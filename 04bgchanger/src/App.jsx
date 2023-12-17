import { useState } from "react"

function App() {
  const [colour,setColour] = useState("silver")

  return (
    <div className='w-full h-screen duration-200' 
         style={{backgroundColor : colour}}>     
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> 
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                  style={{backgroundColor: "red"}}
                  onClick={()=>setColour("red")}> RED
          </button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                  style={{backgroundColor: "green"}}
                  onClick={()=>setColour("green")}> GREEN
          </button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                  style={{backgroundColor: "blue"}}
                onClick={()=>setColour("blue")}> BLUE
          </button>

        </div>
      </div>
    </div>
  )
}

export default App
