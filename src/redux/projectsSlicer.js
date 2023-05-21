import { createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "none",
    tally: 2,
    duration: 10,
    id: 0,
    selected: false,
  },
];

export const projectSlice = createSlice({
  name: "trigger",
  initialState,

  reducers: {
    addNewProject: (state, action) => {
      const payload = action.payload;

      if (Array.isArray(payload)) {
        return payload;
      } else {
        const { projectNameX, projectTallyX, newId } = payload;
        const newProject = {
          name: projectNameX,
          tally: 0,
          duration: projectTallyX,
          id: newId,
        };

        return [...state, newProject];
      }
    },
  },
});

export const { addNewProject } = projectSlice.actions;
export default projectSlice.reducer;
