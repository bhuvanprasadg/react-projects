import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { getTodosByVisibilityFilter } from "../redux/selectors";

const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos && todos.length
      ? todos.map((todo, index) => {
          return <Todo key={`todo-${todo.id}`} todo={todo} />;
        })
      : "No todos, yay!"}
  </ul>
);

const mapStateToProps = (state) => {
  const sortKey = "desc";

  const { visibilityFilter } = state;
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  sortKey === "asc"
    ? todos.sort((a, b) => a.content.localeCompare(b.content))
    : todos.sort((a, b) => b.content.localeCompare(a.content));
  return { todos };
};

export default connect(mapStateToProps)(TodoList);