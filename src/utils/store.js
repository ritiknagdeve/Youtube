import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appSlice';
import searchReducer from './searchSlice'; 
import chatReducer from './chatSlice';
const store = configureStore({
    reducer:{
        app: appReducer, 
        searchData: searchReducer,
        chatData: chatReducer
    }
})

export default store;