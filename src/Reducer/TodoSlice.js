import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    todos: []
}

export const TodoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: true
            }
            state.todos.push(todo)
            let data = JSON.parse(localStorage.getItem('todos')) || []
            data.push(todo)
            localStorage.setItem('todos', JSON.stringify(data))
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
            let data = JSON.parse(localStorage.getItem('todos')) || [];
            data = data.filter((todo) => todo.id !== action.payload);
            localStorage.setItem('todos', JSON.stringify(data));
        },
        editTodo: (state, action) => {
            const { id, text } = action.payload;
            state.todos = state.todos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, text };
                }
                return todo;
            });
            let data = JSON.parse(localStorage.getItem('todos')) || [];
            data = data.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, text };
                }
                return todo;
            });
            localStorage.setItem('todos', JSON.stringify(data));
        },
        // toggleTodoCompleted: (state, action) => {
        //     const id = action.payload;
        //     state.todos = state.todos.map((todo) => {
        //         if (todo.id === id) {
        //             return { ...todo, completed: !todo.completed };
        //         }
        //         return todo;
        //     });
        //     let data = JSON.parse(localStorage.getItem('todos')) || [];
        //     data = data.map((todo) => {
        //         if (todo.id === id) {
        //             return { ...todo, completed: !todo.completed };
        //         }
        //         return todo;
        //     });
        //     localStorage.setItem('todos', JSON.stringify(data));
        // },
    }
})

export const { addTodo, removeTodo, editTodo} = TodoSlice.actions

export default TodoSlice.reducer