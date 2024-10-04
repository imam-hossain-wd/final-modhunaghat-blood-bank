
import { combineReducers } from '@reduxjs/toolkit';
import someReducer from './slice/someSlice';
import { baseApi } from './api/baseApi';

const rootReducer = combineReducers({
    some: someReducer,
    [baseApi.reducerPath]: baseApi.reducer,

});

export default rootReducer;
