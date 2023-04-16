import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../types/user';

const initialState = {
    user: {} as User,
    loading: false,
    error: null,
}

export const userSlice = createSlice({
    initialState,
    name: "user",
    reducers: {
        getUserSuccess(state, action) {
            state.user = action.payload
            state.loading = false
        }
    }
});


export const { getUserSuccess } = userSlice.actions;
export default userSlice.reducer;