import React from "react";
import Addtodo from './components/Addtodo'
import TodoList from "./components/TodoList";


function App() {

    

  return (
    <>
      <div >
          <h1 className=' text-center font-sans text-gray-900 font-extrabold text-4xl p-6 mb-6'> TODO using React and Redux</h1>
          <div className=' flex flex-col flex-wrap items-center'>
              <Addtodo />
              <TodoList />
          </div>
      </div>
    </>
  )
}

export default App
