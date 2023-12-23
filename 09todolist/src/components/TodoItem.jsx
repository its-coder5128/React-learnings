import React, { useState } from "react";
import useTodo  from "../contexts/TodoContext";

function TodoItem({ todo }) {

    const {toggleNotEditable, deleteTodo, updateTodo} = useTodo()

    const [isUpdatable,setIsUpdatable] = useState(false)
    const [todoMsg,setTodoMsg] = useState(todo.todo) 

    const toggleNotEditable_fun = ()=>{
        toggleNotEditable(todo.id);
    }

    const editTodo = () => {
        updateTodo({...todo, todo: todoMsg})
        setIsUpdatable(false)
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.notEditable ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.notEditable}
                onChange={toggleNotEditable_fun}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isUpdatable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.notEditable ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isUpdatable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.notEditable) return;

                    if (isUpdatable) {
                        editTodo();
                    } else setIsUpdatable((prev) => !prev);
                }}
                disabled={todo.notEditable}
            >
                {isUpdatable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
