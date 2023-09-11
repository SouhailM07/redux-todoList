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
  },
});

export let { addTask } = inputSLice.actions;
export default inputSLice.reducer;
