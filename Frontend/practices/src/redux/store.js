import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './slices/counterSlice.js'

export const store = configureStore({
 reducer: {
        counter : counterSlice
    }
})