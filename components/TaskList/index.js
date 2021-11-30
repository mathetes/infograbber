import React, { useState } from "react";
import TaskItem from "../TaskItem";

function TaskList(todos) {
  const [todos, setTodos] = useState([]);

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  return <TaskItem todos={todos} removeTodo={removeTodo} />;
}

export default TaskList;
