import { FormEvent, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllTask,
  removeTask,
  editTask,
  addTask,
} from '../../../redux/slices/task.slices';
import { Form } from './components/Form';
import { getCollectionTasks } from '../../../redux/selectors/tasks.selector';
import { isLoadingGetAll } from '../../../redux/selectors/tasks.selector';
import { Card } from '../../modules/core/components/Card';
import { useValuesForm } from '../../hooks/useValuesForm';
import { Task } from '../../../types/user';
import Layout from '../../modules/core/layouts/Layout';
import useToast from '../../hooks/useToast';

const initialState = {
  title: '',
  description: '',
} as Task;

export const Home = () => {
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();
  const tasks = useSelector(getCollectionTasks);
  const isLoadingAll = useSelector(isLoadingGetAll);

  const { handleValues, resetValues, values, setEditValues } =
    useValuesForm(initialState);

  const onRemoveTask = (id: string) => {
    dispatch(removeTask(id) as any);
    useToast({
      message: 'Task removed successfully',
      type: 'success',
    });
    setEditMode(false);
    resetValues();
  };

  const handleEditMode = (id: string) => {
    const task = tasks.find((task) => task._id === id);
    setEditMode(true);
    if (task) {
      setEditValues(task);
      return;
    }
  };

  const onEditTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (values.title === '' || values.description === '') {
      useToast({
        message: 'Please fill all fields',
        type: 'error',
      });
      return;
    }

    dispatch(editTask(values) as any);
    resetValues();
    setEditMode(false);
    useToast({
      message: 'Task edited successfully',
      type: 'success',
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (values.title === '' || values.description === '') {
      useToast({
        message: 'Please fill all fields',
        type: 'error',
      });
      return;
    }

    dispatch(addTask(values) as any);
    resetValues();
    useToast({
      message: 'Task added successfully',
      type: 'success',
    });
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    if (editMode) {
      onEditTask(e);
    } else {
      handleSubmit(e);
    }
  };

  const onComplete = (id: string) => {
    const task = tasks.find((task) => task._id === id);

    if (task) {
      dispatch(editTask({ ...task, status: !task.status }) as any);

      useToast({
        message: 'Task completed successfully',
        type: 'success',
      });

      return;
    }
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      submitForm(e as any);
    }
  };

  useEffect(() => {
    dispatch(getAllTask() as any);
  }, []);

  return (
    <Layout>
      <div className=' flex min-h-screen flex-col  items-center justify-around md:flex-row'>
        <div className=' w-full  md:w-1/2 '>
          <Form
            onHandleValues={handleValues}
            values={values}
            editValues={editMode}
            resetValues={resetValues}
            onSubmit={submitForm}
            setEditMode={setEditMode}
            onKeyPress={onKeyPress}
          />
        </div>

        <div className='flex h-[50rem] w-full flex-wrap content-start justify-center gap-2 overflow-auto py-5 md:w-1/2'>
          {tasks.map((task) => (
            <Card
              key={task._id}
              task={task}
              onRemoveTask={onRemoveTask}
              onEditTask={handleEditMode}
              onComplete={onComplete}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};
