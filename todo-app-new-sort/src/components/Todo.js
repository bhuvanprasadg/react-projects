import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { toggleFavorite, toggleTodo } from "../redux/actions";

const Todo = ({ todo, toggleTodo, toggleFavorite }) => (
  <li className="todo-item">
    <span
      onClick={() => {
        console.log("toggle favorite");
        toggleFavorite(todo.id);
      }}
    >
      {todo && todo.favorite ? "👍" : "👎"}
    </span>
    <span onClick={() => toggleTodo(todo.id)}>
      {todo && todo.completed ? "👌" : "👋"}
    </span>
    <span
      className={cx(
        "todo-item__text",
        todo && todo.completed && "todo-item__text--completed",
        todo && todo.favorite && "todo-item__text--favorite"
      )}
    >
      {todo.content}
    </span>
  </li>
);

// export default Todo;
export default connect(null, { toggleTodo, toggleFavorite })(Todo);
