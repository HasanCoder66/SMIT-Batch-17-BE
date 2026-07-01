import{ createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState:{
        users : [],
        loading:false,
        error:null,
        message : null
    },

    reducers : {
        getUsersStart : (state) =>{
            state.loading = true;
        } ,
        getUsersSuccess : (state,action) =>{
            console.log(action.payload);
            
            state.loading = false;
            state.error = null;
            state.message = action.payload.message,
            state.users = action.payload.data;
        } ,
        getUsersFailure : (state,action) =>{
            state.loading = false;
            state.error = action.payload;
            state.message = null
            state.users = null
        } ,
    }
})


export const {getUsersFailure, getUsersStart, getUsersSuccess} = userSlice.actions
export default userSlice.reducer