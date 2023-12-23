import { useEffect, useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import { TodoProvider } from './contexts/TodoContext'

function App() {
  const [todo,setTodo] = useState([])
  
  const addTodo = (item)=>{
    setTodo((prev) => [{...item}, ...prev])
  }
  const toggleNotEditable = (id)=>{
    setTodo((prev) => 
        prev.map((item) =>(
        item.id === id ? {...item, notEditable: !item.notEditable  } : item
    )))
  }
  const deleteTodo = (id) =>{
    setTodo((prev) => prev.filter((item) => item.id != id))
  }
  const updateTodo = ( item ) =>{
    todo.map((obj) => (
      item.id === obj.id ? {...item} : obj 
    ))
  }

  const initTodo = JSON.parse(localStorage.getItem("list"))

  useEffect(()=>{
    setTodo(initTodo)
  },[])
  useEffect(()=>{
    localStorage.setItem("list",JSON.stringify(todo))
  },[todo])


  return (
    <TodoProvider value = {{ todo, addTodo, updateTodo, deleteTodo, toggleNotEditable }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
                <TodoForm />
            </div>
            <div className="flex flex-wrap gap-y-3">
                {
                  todo.map((Todo) => (
                    <div key={Todo.id} className=" w-full">
                      <TodoItem todo = {Todo}/>
                    </div>
                  ))
                }
            </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
