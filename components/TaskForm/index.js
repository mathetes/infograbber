import React, { useState } from "react";
import Button from "bootstrap/dist/css/bootstrap.min.css";
import styles from "@/styles/Header.module.css";

const TaskForm = () => {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <input
        className={styles.input}
        type="text"
        alt="input"
        placeholder="Новая задача"
      />
      <Button>Добавить</Button>
    </>
  );
};

export default TaskForm;
