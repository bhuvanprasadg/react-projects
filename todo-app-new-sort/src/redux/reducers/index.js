import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import todos from "./todos";
import sortOption from "./sortOption";

export default combineReducers({ todos, visibilityFilter, sortOption });
