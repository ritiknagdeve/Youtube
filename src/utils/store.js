import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appSlice';
import searchReducer from './searchSlice'; 
const store = configureStore({
    reducer:{
        app: appReducer, 
        searchData: searchReducer
    }
})

export default store;