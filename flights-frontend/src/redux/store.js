import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/loginReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

var middleware = [sagaMiddleware];
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga);
export default store;
