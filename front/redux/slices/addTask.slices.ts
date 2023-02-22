import { createSlice } from '@reduxjs/toolkit';
import { Task } from '../../types/user';


const initialState = {
    task: {} as Task,
    loading: false,
    error: null,
}

interface InitialState {
    task: Task,
    loading: boolean,
    error: string | null,
}


const addTaskSlice = createSlice({
    name: 'addTask',
    initialState,
    reducers: {
        addTaskSuccess(state: InitialState, action) {
            state.task = action.payload
            state.loading = false
        }
    }
})


export const { addTaskSuccess } = addTaskSlice.actions;
export default addTaskSlice.reducer;