import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import styled from "styled-components";

const ListWrapper = styled.div`
  margin-top: 20px;
`;

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <ListWrapper>
      {todos.length > 0 ? (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        <p>NO Tasks to show</p>
      )}
    </ListWrapper>
  );
};

export default TodoList;
