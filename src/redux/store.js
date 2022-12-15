import { configureStore } from "@reduxjs/toolkit";
import {counterSlice, projectNameSlice} from "./trigger";

export default configureStore({
    reducer:{

        trigger: counterSlice.reducer,
        projectName:projectNameSlice.reducer
    }
        
})