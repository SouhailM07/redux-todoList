import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  tasks: [],
};

let inputSLice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state: any, action) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state: any, action) => {
      state.tasks = state.tasks.filter((e) => {
        return e !== action.payload;
      });
    },
  },
});

export let { addTask, removeTask } = inputSLice.actions;
export default inputSLice.reducer;
