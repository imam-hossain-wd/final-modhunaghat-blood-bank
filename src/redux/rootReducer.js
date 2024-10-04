
import { combineReducers } from '@reduxjs/toolkit';
import someReducer from './slice/someSlice';

const rootReducer = combineReducers({
    some: someReducer,

});

export default rootReducer;
