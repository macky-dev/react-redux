import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer }
});

export default store;

/** 
 * W/OUT REDUX TOOLKIT
 * 
import { createStore } from "redux";

const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter
    };
  }

  if (action.type === "increase") {
    return {
      counter: state.counter + action.value,
      showCounter: state.showCounter
    };
  }

  if (action.type === "toggle") {
    return {
      counter: state.counter,
      showCounter: !state.showCounter
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
*/
