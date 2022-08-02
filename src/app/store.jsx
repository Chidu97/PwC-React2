import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
    reducer : {
        counter: counterReducer, 
        // blog: blogReducer, //this is how to use reducer for a blog
        // profile: profileReducer, //this is how to use reducer for profile
    }
});



