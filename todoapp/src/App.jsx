import React from "react";
import { store } from "./redux/store";
import TodoForm from "./components/TodoForm";
import { Provider } from "react-redux";
import TodoList from "./components/TodoList";
import { GlobalStyles } from "./styles/GlobalStyles";

const App = () => {
  return (
    //parent component which has the control over all the child components...
    <Provider store={store}>
      <GlobalStyles />
      <div className="App">
        <h1>Task Master</h1>
        <TodoForm />
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
