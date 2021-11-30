import { RiCloseCircleLine } from "react-icons/ri";

const TaskItem = (todos, removeTodo) => {
  return todos.map((todo, index) => (
    <div key={index}>
      <div key={todo.id}>
        <h3>{todo.title}</h3>
      </div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
      </div>
    </div>
  ));
};

export default TaskItem;
