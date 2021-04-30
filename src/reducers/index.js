import { combineReducers } from "redux";
import counterReducer from "./counter";
import isLoggedInReducer from "./auth";

const rootReducer = combineReducers({
  counter: counterReducer,
  isLoggedin: isLoggedInReducer,
});
export default rootReducer;
