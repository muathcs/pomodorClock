import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pomodorTimer: 30,
  shortBreak: 5,
  longBreak: 10,
  seconds: "00",
  minutes: 10,
  testVal: 0,
  timer: 5,
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    setPomodorTimerR: (state, action) => {
      console.log("POMORedux: ", action.payload);
      state.pomodorTimer = action.payload;
    },
    setShortBreakR: (state, action) => {
      console.log("POMOShortBreak: ", action.payload);

      state.shortBreak = action.payload;
    },
    setLongBreakR: (state, action) => {
      console.log("POMOLongBreak: ", action.payload);
      state.longBreak = action.payload;
    },
    setSecondsR: (state, action) => {
      state.seconds = action.payload;
    },
    setMinutesR: (state, action) => {
      console.log("POMOMINutes: ", action.payload);
      console.log("XX: ", action.payload);
      state.minutes = action.payload;
    },
    setTimer: (state, action) => {
      console.log("XX: ", action.payload);
      state.timer = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setPomodorTimerR,
  setShortBreakR,
  setLongBreakR,
  setSecondsR,
  setMinutesR,
} = timerSlice.actions;

export default timerSlice.reducer;
