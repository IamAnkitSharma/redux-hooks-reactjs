import { combineReducers } from "redux";
import counterReducer from "./counter";
import isLoggedInReducer from "./auth";
import userReducer from "./user";

const rootReducer = combineReducers({
  counter: counterReducer,
  isLoggedin: isLoggedInReducer,
  user:userReducer
});
export default rootReducer;
