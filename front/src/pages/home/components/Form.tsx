import { useDispatch } from 'react-redux';
import { addTaskSuccess } from '../../../../redux/slices/addTask.slices';
import { useValuesForm } from '../../../hooks/useValuesForm';
import { Input } from '../../../modules/common/components/Input';
import { Textarea } from '../../../modules/common/components/Textarea';

export const Form = () => {
  const initialState = {
    title: '',
    task: '',
  };

  const { handleValues, resetValues, values } = useValuesForm(initialState);
  const dispatch = useDispatch();

  return (
    <form action='' className='w-2/5 m-auto mt-20'>
      <Input
        labelText='Title task'
        name='title'
        type='text'
        placeholder='Title task'
        value={values.title}
        variant='filled'
        autocomplete='off'
        onHandleChange={handleValues}
      />

      <Textarea
        name='task'
        rows={4}
        placeholder='Learn MongoDB'
        value={values.task}
        onHandleChange={handleValues}
      />

      <button
        type='button'
        onClick={() => {
          resetValues();
          dispatch(
            addTaskSuccess({
              title: values.title,
              task: values.task,
            })
          );
        }}
        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-2'
      >
        Agregar
      </button>
    </form>
  );
};
