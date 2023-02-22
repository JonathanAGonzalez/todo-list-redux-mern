import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    tasks: [],
    loading: false,
    error: null,
}

export const getAllTaskSlice = createSlice({
    initialState,
    name: "getAllTask",
    reducers: {
        getAllTaskSuccess(state, action) {
            state.tasks = action.payload
            state.loading = false
        },
        getAllTaskError(state, action) {
            state.error = action.payload
            state.loading = false
        },
        getAllTaskLoading(state) {
            state.loading = true
        }
    }
});


export const { getAllTaskSuccess, getAllTaskError, getAllTaskLoading } = getAllTaskSlice.actions;
export default getAllTaskSlice.reducer;