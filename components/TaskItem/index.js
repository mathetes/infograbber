import React, {useState} from 'react'
import styles from "@/styles/TaskItem.module.css";

import { RiCloseCircleLine } from "react-icons/ri";


function TaskItem ({todos, removeTodo}) {
  
 todos = [
    {
      id: 1,
      title: "Привет, мир",
    },
    { id: 2, title: "Установка" },
    { id: 3, title: "Работаем!" },
    { id: 4, title: "Учимся!" },
    { id: 5, title: "Треним!" },
    { id: 6, title: "Всем пока!" },
  ];

  return todos.map((todo, index) => (
    
    <div className={styles.itemBlock} key={index}>
      <div key={todo.id}>
        <h3>{todo.title}</h3>
      </div>
      <div className={styles.icons}>
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
      </div>
    </div>
  ));
};

export default TaskItem;
