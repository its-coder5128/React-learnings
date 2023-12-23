import React,{ useEffect, useState } from "react";
import { useSelector, useDispatch} from "react-redux";
import TodoListCard from "./TodoListCard";
import { initTodo, removeTodo } from "../features/todo/todoSlice";

export default function TodoList(){

    const todoList = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const [todo,setTodo] = useState([])

    const initiTodo = JSON.parse(localStorage.getItem("newList"))
    
    useEffect(() => {
         dispatch(removeTodo(1)) 
         if(initiTodo && initiTodo.length>0)
         {
            setTodo(initiTodo)
            initiTodo.map((item) => (
              dispatch(initTodo(item.Message))
            ))
         }
    },[])

    useEffect(()=>{
        setTodo(todoList)
        localStorage.setItem("newList",JSON.stringify(todoList))
    },[todoList])

    return(

        <ul className=" p-4 w-3/4">
                  {
                      todo.map((item) => (
                              <li key={item.id} className=" mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded">
                                  <TodoListCard item = {item} />
                              </li>
                      ))
                  }
        </ul>

    );
}