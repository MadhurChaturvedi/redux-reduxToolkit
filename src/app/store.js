import { configureStore } from "@reduxjs/toolkit";
import  showData from "../features/counterSlice";

export const store = configureStore({
  reducer: {
    show: showData,
  },
});