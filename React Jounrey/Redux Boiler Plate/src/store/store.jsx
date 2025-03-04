import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../store/reducers/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
