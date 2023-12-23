import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1 , Message: "", onlyRead: true}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo : (state,action) => {
            const todo = {
                id: nanoid(),
                Message : action.payload,
                onlyRead : true
            }
            state.todos.unshift(todo)
            
        },
        initTodo : (state,action) => {
            const todo = {
                id: nanoid(),
                Message : action.payload,
                onlyRead : true
            }
            state.todos.push(todo)
            
        },
        removeTodo : (state,action) => {
            state.todos = state.todos.filter( (item) => item.id !== action.payload )
        },
        updateTodo : (state,action) => {
            state.todos = state.todos.filter( (item) => item.id !== action.payload.id )
            state.todos.unshift(action.payload)
        }
        
    }
})

export const { initTodo, addTodo, removeTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer
 