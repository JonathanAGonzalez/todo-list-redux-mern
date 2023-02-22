import { combineReducers } from "@reduxjs/toolkit";
import getAllTaskSlice from '../slices/getAllTask.slices';
import addTaskSlice from '../slices/addTask.slices';


export const rootReducer = combineReducers({
    getAllTaskSlice,
    addTaskSlice
})