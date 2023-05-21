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
      state.pomodorTimer = action.payload;
    },
    setShortBreakR: (state, action) => {
      state.shortBreak = action.payload;
    },
    setLongBreakR: (state, action) => {
      state.longBreak = action.payload;
    },
    setSecondsR: (state, action) => {
      state.seconds = action.payload;
    },
    setMinutesR: (state, action) => {
      state.minutes = action.payload;
    },
    setTimer: (state, action) => {
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
