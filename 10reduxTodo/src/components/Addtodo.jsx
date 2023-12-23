import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import { addTodo } from "../features/todo/todoSlice";

export default function Addtodo(){
    const [todoMsg,setTodoMsg] = useState('')
    const dispatch = useDispatch()

const addNewTodo = (e) => {
    e.preventDefault()
    dispatch(addTodo(todoMsg))
    setTodoMsg('')
}
        
    return(
        <div className=" p-4 w-3/4 h-fit">
            <form
                onSubmit={addNewTodo}
                className=" flex rounded-lg overflow-hidden bg-slate-200"
                
            >
                <input
                    id="message"
                    type="text" 
                    className="  bg-slate-200 outline-none ps-4 w-full"
                    placeholder="Write todo..."
                    value={todoMsg}
                    onChange={(e) => setTodoMsg(e.target.value)}
                />
                <button 
                    type="submit"
                    className="  py-2 w-40 bg-green-900 hover:bg-green-950 text-white text-xl font-medium"
                >
                    Add Todo
                </button>
            </form>

        </div>
    );
}