import {createSlice} from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:"trigger",
    initialState:{
        trigger:false
    },
    reducers:{
        flip: (state) =>{
            state.trigger = !state.trigger;
        }
    }
})

export const {flip} = counterSlice.actions;

export default counterSlice.reducer;