import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todosSlice";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const FormWrapper = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  background: rgba(255, 255, 255, 0.3);
  border: none;
  border-radius: 5px;
  color: #fff;
`;

const Button = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #ff7f50;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  transition: background-color 0.3s ease;
`;

const TodoForm = () => {
  const [task, setTask] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === " ") return;

    const newTask = {
      id: uuidv4(),
      text: task,
      completed: false,
    };

    dispatch(addTodo(newTask));
    setTask("");
  };

  return (
    <>
      <FormWrapper>
        <Input
          type="text"
          placeholder="enter your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <Button onClick={handleSubmit}> Add Task</Button>
      </FormWrapper>
    </>
  );
};

export default TodoForm;
