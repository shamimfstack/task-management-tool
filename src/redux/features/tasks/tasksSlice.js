import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTasks: (state, { payload }) => {
      if (state.tasks.length === 0) {
        state.tasks.push({ id: 1, ...payload });
      } else {
        const lastElement = state.tasks.at(-1);
        state.tasks.push({
          id: lastElement.id + 1,
          status: "pending",
          ...payload,
        });
      }
    },
  },
  removeTasks: (state, {payload}) => {
    state.tasks.filter((item) => item.id !== payload)
  }
});

export const { addTasks } = tasksSlice.actions;

export default tasksSlice.reducer;
