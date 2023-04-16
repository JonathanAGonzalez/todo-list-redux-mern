import { createSlice, Dispatch, current } from "@reduxjs/toolkit";
import axios from "axios";
import { Task } from '../../types/user';

export const initialState = {
    tasks: [],
    loadingAdd: false,
    loadingRemove: false,
    loadingGetAll: false,
    loadingEdit: false,
    error: null,
}


export interface InitialStateTask {
    tasks: Task[],
    loadingAdd: boolean,
    loadingRemove: boolean,
    loadingGetAll: boolean,
    loadingEdit: boolean,
    error: string | null,
}

interface DeleteTaskResponse {
    data: {
        success: boolean
    }
}

export const taskSlice = createSlice({
    initialState,
    name: "getAllTask",
    reducers: {
        getAllTaskSuccess(state, action) {
            state.tasks = action.payload
            state.loadingGetAll = false;
        },
        getAllTaskError(state, action) {
            state.error = action.payload
        },
        addTaskSuccess(state: InitialStateTask, action) {
            state.tasks = [...state.tasks, action.payload]
            state.loadingAdd = false;
        },
        addTaskError(state: InitialStateTask, action) {
            state.error = action.payload
        },
        removeTaskSuccess(state: InitialStateTask, action) {
            state.tasks = state.tasks.filter(task => task._id !== action.payload)
            state.loadingRemove = false;
        },
        editTaskSuccess(state: InitialStateTask, action) {
            state.tasks = state.tasks.map(task => task._id === action.payload._id ? action.payload : task)
            state.loadingEdit = false;
        },
        loading(state: InitialStateTask, action) {
            switch (action.payload) {
                case "getAll":
                    state.loadingGetAll = true;
                    break;
                case "add":
                    state.loadingAdd = true;
                    break;
                case "remove":
                    state.loadingRemove = true;
                    break;
                case "edit":
                    state.loadingEdit = true;
                    break;
                default:
                    break;
            }
        }
    }
});


export const getAllTask = () => async (dispatch: Dispatch) => {
    try {
        dispatch(loading('getAll'));
        const { data } = await axios.get("http://localhost:6060/task/get-all");
        dispatch(getAllTaskSuccess(data));

    } catch (error) {
        dispatch(getAllTaskError(error))
    }
}

export const addTask = (task: Task) => async (dispatch: Dispatch) => {
    dispatch(loading('add'));
    const { data } = await axios.post("http://localhost:6060/task/create", task)
    dispatch(addTaskSuccess(data));
}

export const removeTask = (id: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(loading('remove'));
        await axios.delete<DeleteTaskResponse>(`http://localhost:6060/task/remove/${id}`)
        dispatch(removeTaskSuccess(id));
    } catch (error) {
        console.log(error)
    }
}

export const editTask = (task: Task) => async (dispath: Dispatch) => {

    try {
        dispath(loading('edit'));
        const { data } = await axios.put(`http://localhost:6060/task/update/${task._id}`, task)
        dispath(editTaskSuccess(data));
    } catch (error) {
        console.log(error)
    }
}


export const { getAllTaskSuccess, getAllTaskError, loading, editTaskSuccess, addTaskSuccess, removeTaskSuccess } = taskSlice.actions;
export default taskSlice.reducer;