import React from "react";
import { useDispatch } from "react-redux";
import { incrementActionCreator } from "./redux/actions";

function IncrementCounter() {
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(incrementActionCreator());
  };
  return <button onClick={increment}>+</button>;
}

export default IncrementCounter;
