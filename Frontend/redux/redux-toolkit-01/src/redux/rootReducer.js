import { combineReducers } from "@reduxjs/toolkit";
import authSlice from './features/authSlice.js'
import userSlice from './features/userSlice.js'


const rootReducer = combineReducers({
auth: authSlice,
user : userSlice 
})

export default rootReducer