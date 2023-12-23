import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todo : {
        id : 1,
        todo : "msg in todo",
        notEditable : false,
    },
    addTodo : () => {},
    updateTodo : () => {},
    deleteTodo : () => {},
    toggleNotEditable : () => {},
})

export const TodoProvider = TodoContext.Provider

export default function useTodo(){
    return useContext(TodoContext)
}