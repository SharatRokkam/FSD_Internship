import React from "react";
import { toggleComplete, deleteTodo } from "../redux/todosSlice";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const TodoWrapper = styled.div`
  background: rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  margin-bottom: 15px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  border-left: 5px solid ${(props) => (props.completed ? "#00c853" : "#ff5252")};

  &:hover {
    transform: translateY(-5px);
  }
`;

const TaskText = styled.div`
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  color: ${(props) => (props.completed ? "#b2ff59" : "#fff")};
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => (props.primary ? "#00c853" : "#ff5252")};
  color: white;
  font-weight: bold;

  &:hover {
    background-color: ${(props) => (props.primary ? "#00b248" : "#ff1744")};
  }
`;

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const handleToggleComplete = () => {
    dispatch(toggleComplete(todo.id));
  };
  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <>
      <TodoWrapper completed={todo.completed}>
        <TaskText completed={todo.completed}>{todo.text}</TaskText>
        <ButtonGroup>
          <Button primary onClick={handleToggleComplete}>
            {todo.completed ? "undo" : "Complete"}
          </Button>
          <Button onClick={handleDelete}>Delete</Button>
        </ButtonGroup>
      </TodoWrapper>
    </>
  );
};

export default TodoItem;
