import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";
import userReducer from "./userSlice"

export default combineReducers({
  todos,
  visibilityFilter,
  user: userReducer
});