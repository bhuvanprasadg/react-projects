import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_FILTER,
  TOGGLE_FAVORITE,
  SET_SORT,
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

export const setSort = (sort) => ({
  type: SET_SORT,
  payload: { sort },
});
