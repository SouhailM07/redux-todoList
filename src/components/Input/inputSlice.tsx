import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  tasks: [],
};

let inputSLice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state: any, action) => {
      if (action.payload.length > 0) {
        state.tasks.push(action.payload);
      }
    },
    removeTask: (state: any, action) => {
      state.tasks = state.tasks.filter((e) => {
        return e !== action.payload;
      });
    },
    editTask: (state: any, action) => {
      let editedTask = prompt("edit your task here");
      let task: any = document.getElementById(action.payload);
      state.tasks.splice(state.tasks.indexOf(task.textContent), 1, editedTask);
    },
  },
});

export let { addTask, removeTask, editTask } = inputSLice.actions;
export default inputSLice.reducer;
