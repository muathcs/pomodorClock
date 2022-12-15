import {createSlice} from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:"trigger",
    initialState:{
        trigger:false
    },

    reducers:{
        flip: (state) =>{
            state.trigger = !state.trigger;
        },

    }

})

export const projectNameSlice = createSlice({
    name:"projectName",
    initialState:{
        projectName: "project"
    },

    reducers:{
        setName: (state, action) =>{
            state.projectName = action.payload;
        }
    }
})

export const {flip} = counterSlice.actions;
export const {setName} = projectNameSlice.actions;

