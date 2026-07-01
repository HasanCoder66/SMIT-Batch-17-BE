import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './rootReducer.js'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig ={
    key : "root",
    storage : storage.default
}

const persistedReducer = persistReducer(
    persistConfig,
    rootReducer
)

const store = configureStore({
    middleware: (getDefaultMiddleware) => {
       return getDefaultMiddleware({
            serializableCheck :false
        })
    },
    reducer : persistedReducer
})


export const persistor = persistStore(store)
export default store