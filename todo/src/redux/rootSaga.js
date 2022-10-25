import { call, takeEvery, put, all } from "redux-saga/effects";
import {
  addTodoSuccess,
  addTodoFailure,
  toggleTodoSuccess,
  toggleTodoFailure,
} from "./actions";

function* callApiSaveTodo(todo) {
  console.log(`todo: ${JSON.stringify(todo)}`);
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  };
  return yield fetch("http://localhost:3030/api/todos/", requestOptions).then(
    (response) => response.json()
  );
}

function* saveNewToDo(action) {
  yield console.log("saved to back end", JSON.stringify(action));
  try {
    const todo = yield call(callApiSaveTodo, action.payload);
    yield put(addTodoSuccess(todo));
  } catch (error) {
    yield put(addTodoFailure(error));
  }
}

function* callApiToggleNewTodo(id) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  };
  return yield fetch(
    `http://localhost:3030/api/todos/${id}/toggle`,
    requestOptions
  ).then((response) => response.json());
}

function* toggleNewToDo(action) {
  try {
    const todo = yield call(callApiToggleNewTodo, action.payload.id);
    yield put(toggleTodoSuccess(todo));
  } catch (error) {
    yield put(toggleTodoFailure(error));
  }
}

function* rootSaga() {
  console.log("inside root Saga");
  yield all([
    takeEvery("ADD_TODO", saveNewToDo),
    takeEvery("TOGGLE_TODO", toggleNewToDo),
  ]);
}

export default rootSaga;
