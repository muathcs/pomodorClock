import { configureStore } from "@reduxjs/toolkit";
import { counterSlice, projectNameSlice } from "./trigger";
import timerSlice from "./timer";
import projectSlice from "./projectsSlicer";
export default configureStore({
  reducer: {
    projectList: projectSlice,
    timer: timerSlice,
    trigger: counterSlice.reducer,
    projectName: projectNameSlice.reducer,
  },
});
