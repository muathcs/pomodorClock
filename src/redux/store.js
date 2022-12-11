import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./trigger";

export default configureStore({
    reducer:{
        trigger: counterReducer
    }
})