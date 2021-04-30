import axios from "axios";
import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./actions/auth";
import { decrement, increment } from "./actions/counter";
import { getRandomUser } from "./actions/user";
import "./App.css";
function App() {
  const counter = useSelector((state) => state.counter);
  const isLoggedin = useSelector((state) => state.isLoggedin);
  const { name, isLoading } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const inputRef = useRef(0);
  // const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const loginHandler = () => {
    login();
  };
  const logoutHandler = () => {
    dispatch(logout());
  };
  const fetchRandomUser = async () => {
    dispatch(getRandomUser());
    return;
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

      <div style={{ marginTop: "1rem" }}>
        <hr />
        <h3>{isLoggedin ? "User is Logged In" : "User is Not Logged In"}</h3>
        <button onClick={!isLoggedin ? loginHandler : logoutHandler}>
          {isLoggedin ? "Logout" : "Login"}
        </button>
      </div>
      <div id="fetchRandomUser">
        <hr />
        <button onClick={fetchRandomUser}>Fetch Random User From API</button>
        {isLoading && (
          <img
            src="https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif"
            alt=""
          />
        )}

        {error && <h2 id="error">{error}</h2>}
        <h2>{name}</h2>
      </div>
    </div>
  );
}

export default App;
