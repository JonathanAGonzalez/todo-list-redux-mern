import { combineReducers } from "@reduxjs/toolkit";
import taskSlice from '../slices/task.slices';
import userSlice from '../slices/user.slices';



export const rootReducer = combineReducers({
    taskSlice,
    userSlice
})