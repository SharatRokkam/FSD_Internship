import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todosSlice";

export const store = configureStore({
  // it is just function that manages the whole stores tasks
  reducer: {
    todos: todosReducer,
  },
});
