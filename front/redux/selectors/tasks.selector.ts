import { InitialStateTask } from '../slices/task.slices';


interface State {
    taskSlice: InitialStateTask

}

export const getCollectionTasks = (state: State) => state.taskSlice.tasks;
export const isLoadingGetAll = (state: State) => state.taskSlice.loadingGetAll;
export const isLoadingAdd = (state: State) => state.taskSlice.loadingAdd;
export const isLoadingRemove = (state: State) => state.taskSlice.loadingRemove;
export const isLoadingEdit = (state: State) => state.taskSlice.loadingEdit;




