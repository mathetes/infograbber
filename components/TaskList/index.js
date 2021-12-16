import React, { useState } from "react";
import TaskForm from '../TaskForm'
import TaskItem from "../TaskItem";
import Modal from 'react-modal';


function TaskList() {
  const [todos, setTodos] = useState([
 
      {
        id: 1,
        text: "Привет, мир",
      },
      { id: 2, text: "Установка" },
      { id: 3, text: "Работаем!" },
      { id: 4, text: "Учимся!" },
      { id: 5, text: "Треним!" },
      { id: 6, text: "Всем пока!" },

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


  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
        return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
};

const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id)

    setTodos(removeArr);
};

const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
        if (todo.id === id) {
            todo.isComplete = !todo.isComplete;
        }
        return todo;
    });
    setTodos(updatedTodos);
};


  return (
    <>
      <TaskForm onSubmit={addTodo} />
      <TaskItem todos={todos} completeTodo={completeTodo}
        removeTodo={removeTodo} updateTodo={updateTodo}  />
      <Modal className="modal" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
          <h2>Ooops!</h2>
          <p>It's look like you already add this task...</p>
          <button onClick={() => setModalIsOpen(false)}>I Know</button>
      </Modal>
    </>
  )
}



export default TaskList;
