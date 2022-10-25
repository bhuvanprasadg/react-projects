import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_FILTER,
  TOGGLE_FAVORITE,
  ADD_TODO_SUCCESSFUL,
  ADD_TODO_FAILURE,
  TOGGLE_TODO_SUCCESSFUL,
  TOGGLE_TODO_FAILURE
} from "./actionTypes";

let nextTodoId = 0;

export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const toggleFavorite = (id) => ({
  type: TOGGLE_FAVORITE,
  payload: { id },
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: { filter },
});

export const addTodoSuccess = (todo) => ({
  type: ADD_TODO_SUCCESSFUL,
  payload: {todo},
});

export const addTodoFailure = (error) => ({
  type: ADD_TODO_FAILURE,
  payload: {error:error.toString()},
});

export const toggleTodoSuccess = (todo) => ({
  type: TOGGLE_TODO_SUCCESSFUL,
  payload: {todo},
});

export const toggleTodoFailure = (error) => ({
  type: TOGGLE_TODO_FAILURE,
  payload: {error:error.toString()},
});