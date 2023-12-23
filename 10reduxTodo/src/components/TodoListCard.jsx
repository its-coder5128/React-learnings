import React, { useState } from "react";
import { useSelector, useDispatch} from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

export default function TodoListCard({
    item
}){
    const [onlyRead,setOnlyRead] = useState(true)
    const [todoMsg,setTodoMsg] = useState(item.Message)

    const todoList = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const updateNewTodo = () => {
        if(onlyRead){
            setOnlyRead(!onlyRead)
        }else{
            const todo={
                id: item.id,
                Message: todoMsg,
                onlyRead: true
            }
            dispatch(updateTodo(todo))
            setOnlyRead(!onlyRead)
        }
    }


    return(
        <>
                <input
                    id = {Date.now()}
                    type="text" 
                    className="  bg-zinc-800 outline-none ps-4 text-white "
                    placeholder="Update todo..."
                    value={todoMsg}
                    onChange={(e) => setTodoMsg(e.target.value)}
                    readOnly = {onlyRead}
                    />
                
                <div>
                    <button
                            onClick={updateNewTodo}            
                            className= {` mx-2 text-white ${onlyRead? "opacity-100" : "opacity-30"} bg-gray-500 py-1 px-4 focus:outline-none hover:bg-gray-600 rounded text-md `}
                            >
                            <img width="24" height="24" src="https://img.icons8.com/ios/50/FFFFFF/pen.png" alt="pen"/>
                    </button>
                    <button
                        onClick={() => dispatch(removeTodo(item.id))}
                        className="text-white bg-red-500 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                        >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                    >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                    />
                                </svg>
                    </button>
                </div>
        </>
    );
}