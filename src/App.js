import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./actions/auth";
import { decrement, increment } from "./actions/counter";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLoggedin = useSelector((state) => state.isLoggedin);
  const dispatch = useDispatch();
  const inputRef = useRef(0);

  const loginHandler = () => {
    dispatch(login());
  };
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <div className="App">
      <h1>{counter}</h1>
      <input type="text" ref={inputRef} name="" id="" defaultValue="1" />
      <button onClick={() => dispatch(increment(inputRef.current.value))}>
        +
      </button>
      <button onClick={() => dispatch(decrement(inputRef.current.value))}>
        -
      </button>
      <div style={{ marginTop: "3rem" }}>
        <h3>{isLoggedin ? "User is Logged In" : "User is Not Logged In"}</h3>
        <button onClick={!isLoggedin ? loginHandler : logoutHandler}>{isLoggedin ? "Logout" : "Login"}</button>
      </div>
    </div>
  );
}

export default App;
