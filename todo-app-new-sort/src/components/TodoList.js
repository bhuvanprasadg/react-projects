import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
// import { getTodos } from "../redux/selectors";
import { getTodosByVisibilityFilterAndSort } from "../redux/selectors";

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
  const { visibilityFilter, sortOption } = state;
  const todos = getTodosByVisibilityFilterAndSort(
    state,
    visibilityFilter,
    sortOption
  );
  return { todos };
};

export default connect(mapStateToProps)(TodoList);
