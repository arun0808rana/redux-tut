import { INCREMENT } from "./actionsTypes";
import { DECREMENT } from "./actionsTypes";

export const incrementActionCreator = () => ({
  type: INCREMENT,
  payload: "",
});

export const decrementActionCreator = () => ({
  type: DECREMENT,
  payload: "",
});
