import React, { useState } from "react";
import TaskItem from "../TaskItem";

function TaskList() {
  const [todos, setTodos] = useState([
 
      {
        id: 1,
        title: "Привет, мир",
      },
      { id: 2, title: "Установка" },
      { id: 3, title: "Работаем!" },
      { id: 4, title: "Учимся!" },
      { id: 5, title: "Треним!" },
      { id: 6, title: "Всем пока!" },

  ]);

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };
  

  return <TaskItem todos={todos} removeTodo={removeTodo} />;
}



export default TaskList;
