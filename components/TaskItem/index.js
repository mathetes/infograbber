import React, {useState} from 'react'
import styles from "@/styles/TaskItem.module.css";

import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from 'react-icons/ti'

function TaskItem ({ todos, completeTodo, removeTodo, updateTodo }){
  const [edit, editTodo] = useState({
      id: null,
      value: ''
  });

  const submitUpdate = value => {
      updateTodo(edit.id, value)
      editTodo({
          id: null,
          value: ''
      })
  }

  if (edit.id) {
      return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    
    <div className={styles.itemBlock} key={index}>
      <div key={todo.id}>
        <h3>{todo.text}</h3>
      </div>
      <div className={styles.icons}>
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => editTodo({ id: todo.id, value: todo.text })} className="edit-icon" />
      </div>
    </div>
  ));
};

export default TaskItem;
