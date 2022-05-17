import { createStore } from "redux";
import { toyReducer } from "./redux/reducer";

const store = createStore(toyReducer);

export default store;
