import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    posts: null,
    loading: false,
    error: ""
}

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        getPostData: (state) => {
            state.loading = true;
        },
        getPostDataSuccess: (state, action) => {
            console.log("payload", action);
            state.loading = false;
            state.posts = action.payload;
        },
        getPostDataError: (state, payload) => {
            state.loading = false;
            state.error = payload;
            state.posts = null;
        }
    }
})

export const {getPostData, getPostDataSuccess, getPostDataError} = postSlice.actions;

export default postSlice.reducer;