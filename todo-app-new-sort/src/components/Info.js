import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

const Info = ({ visibilityFilter, sortOption, add }) => {
  return (
    <div>
      <h2>Visibility Filter: {visibilityFilter}</h2>
      <h3>Sort Option: {sortOption}</h3>
      <button
        onClick={() => {
          add("new todo");
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const visibilityFilter = state.visibilityFilter;
  const sortOption = state.sortOption;
  return { visibilityFilter, sortOption };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: (content) => dispatch(addTodo(content)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Info);
