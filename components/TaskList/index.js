import React, { useState } from "react";
import TaskForm from '../TaskForm'
import TaskItem from "../TaskItem";
import Modal from 'react-modal';


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

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const addTodo = todo => {
      const newTodos = [todo, ...todos]
      
      if (!todo.text || /^\s*$/.test(todo.text)) {
          return;
      }
      if (newTodos.length !== 0) {
          var i = 1
          while (i < newTodos.length) {
              if (newTodos[i].text === todo.text) {
                  setModalIsOpen(true);
              }
              i++;
          }
      }
      setTodos(newTodos)
  };


  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };
  

  return (
    <>
      <TaskForm onSubmit={addTodo} />
      <TaskItem todos={todos} removeTodo={removeTodo} />
      <Modal className="modal" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
          <h2>Ooops!</h2>
          <p>It's look like you already add this task...</p>
          <button onClick={() => setModalIsOpen(false)}>I Know</button>
      </Modal>
    </>
  )
}



export default TaskList;
