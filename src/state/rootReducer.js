import {combineReducers} from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import postReducer from "./post/postSlice";

const rootReducer = combineReducers({
    counter: counterReducer,
    post: postReducer,
})

export default rootReducer;