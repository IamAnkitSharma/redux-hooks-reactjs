
import { createStore } from "redux";



//ACTION
const increment = () => {
  return {
    type: "INCREMENT",
  };
};
const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

//REDUCER
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      break;
  }
};


//store 
const store = createStore(counter);

//display
store.subscribe(()=>console.log(store.getState()))
