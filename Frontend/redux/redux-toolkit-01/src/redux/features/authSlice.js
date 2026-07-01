import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    user: null,
    token: null,
    message: null
}

const authSlice = createSlice({
    initialState,
    name: "auth",
    reducers: {


        // signup flow -->
        signupStart: (state) => {
            state.loading = true;
        },
        signupSuccess: (state, action) => {
            console.log(action.payload);
            
            state.loading = false;
            state.message = action.payload
        },
        signupFailure: (state, action) => {
            // console.log(action.payload);
            
            state.loading = false;
            state.error = action.payload.message
        },


        // login flow -->
        loginStart: (state) => {
            state.loading = true;
        },
        loginSuccess: (state, action) => {
            console.log(action.payload);
            
            state.loading = false;
            state.message = action.payload.message;
            state.token = action.payload.token;
            state.error = null;
            state.user = action.payload.data
        },
        loginFailure: (state, action) => {
            // console.log(action.payload);
            
            state.loading = false;
            state.error = action.payload
        },
    }
})

export const {signupFailure, signupStart, signupSuccess, loginStart, loginFailure, loginSuccess} = authSlice.actions
export default authSlice.reducer