import{ createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

//  thunk 

export const getSingleUser = createAsyncThunk("user/getSingleUser" , async (id) => {
    const response = await axios.get(`https://auth-be-five.vercel.app/api/user/${id}`);

    return response.data
})


const userSlice = createSlice({
    name: "user",
    initialState:{
        users : [],
        loading:false,
        error:null,
        message : null,
        user : null
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
    },

    extraReducers: (builder) => {
        builder
        .addCase(getSingleUser.pending, (state) => {
            state.loading = true
        })
        .addCase(getSingleUser.fulfilled, (state, action) => {
            console.log("action payload -->",action.payload);
            state.loading = false;
            state.error = null;
            state.message = action.payload.message
            state.user = action.payload.data
            
        })
        .addCase(getSingleUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.message
        })
    }
})


export const {getUsersFailure, getUsersStart, getUsersSuccess} = userSlice.actions
export default userSlice.reducer