import { configureStore } from "@reduxjs/toolkit"
import TodoSlice from '../Reducer/TodoSlice'

export const store = configureStore({
    reducer: TodoSlice,
    preloadedState: {
        todos: JSON.parse(localStorage.getItem('todos')) || []
    }
})