import logo from "./logo.svg";
import "./App.css";
import DecrementCounter from "./DecrementCounter";
import { useSelector } from "react-redux";
import IncrementCounter from "./IncrementCounter";

function App() {
  const count = useSelector((state) => state.count);
  return (
    <div className="App">
      <div>{count}</div>
      <IncrementCounter />
      <DecrementCounter />
    </div>
  );
}

export default App;
