import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "./components/Input/inputSlice";
let store = configureStore({
  reducer: {
    inputTasks: inputSlice,
  },
});

export default store;
