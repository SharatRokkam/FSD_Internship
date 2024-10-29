import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  todos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,

  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    editTodo: (state, action) => {
      const { id, updatedTask } = action.payload;
      const todoIndex = state.todos.findIndex((todo) => todo.id === id);

      if (todoIndex >= 0) {
        state.todos[todoIndex] = { ...state.todos[todoIndex], ...updatedTask };
      }
    },

    toggleComplete: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, editTodo, deleteTodo, toggleComplete } =
  todosSlice.actions;

export default todosSlice.reducer;
