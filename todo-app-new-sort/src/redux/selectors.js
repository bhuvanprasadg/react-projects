import { SORT_OPTIONS, VISIBILITY_FILTERS } from "../constants";

export const getTodosState = (store) => store.todos;

export const getTodoList = (store) =>
  getTodosState(store) ? getTodosState(store).allIds : [];

export const getTodoById = (store, id) =>
  getTodosState(store) ? { ...getTodosState(store).byIds[id], id } : {};

/**
 * example of a slightly more complex selector
 * select from store combining information from multiple reducers
 */
export const getTodos = (store) =>
  getTodoList(store).map((id) => getTodoById(store, id));

export const getTodosByVisibilityFilterAndSort = (
  store,
  visibilityFilter,
  sortOption
) => {
  var allTodos = getTodos(store);

  console.log(
    `sortOption: ${sortOption}, visibilityFilter: ${visibilityFilter}`
  );

  switch (sortOption) {
    case SORT_OPTIONS.ASCENDING:
      allTodos = allTodos.sort((a, b) => a.content.localeCompare(b.content));
      break;

    case SORT_OPTIONS.DESCENDING:
      allTodos = allTodos.sort((a, b) => b.content.localeCompare(a.content));
      break;

    case SORT_OPTIONS.LATEST:
      allTodos = allTodos.sort((a, b) => b.id - a.id);
      break;

    case SORT_OPTIONS.OLDEST:
      allTodos = allTodos.sort((a, b) => a.id - b.id);
      break;

    default:
      allTodos = allTodos.sort((a, b) => a.content.localeCompare(b.content));
      break;
  }

  console.log(allTodos);

  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.COMPLETED:
      return allTodos.filter((todo) => todo.completed);
    case VISIBILITY_FILTERS.FAVORITE:
      return allTodos.filter((todo) => todo.favorite);
    case VISIBILITY_FILTERS.INCOMPLETE:
      return allTodos.filter((todo) => !todo.completed);
    case VISIBILITY_FILTERS.ALL:
    default:
      return allTodos;
  }
};
