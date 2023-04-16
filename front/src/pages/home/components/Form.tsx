import { useSelector } from 'react-redux';
import { Input } from '../../../modules/common/components/Input';
import { Textarea } from '../../../modules/common/components/Textarea';
import {
  isLoadingAdd,
  isLoadingEdit,
} from '../../../../redux/selectors/tasks.selector';
import { Spinner } from '../../../modules/core/components/Spinner';
import { Task } from '../../../../types/user';

interface EditValues {
  values: Task;
  editValues: Boolean;
  onHandleValues: (e: any) => void;
  resetValues: () => void;
  onSubmit: any;
  setEditMode: (prev: any) => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const Form = ({
  values,
  editValues,
  onHandleValues,
  resetValues,
  onSubmit,
  setEditMode,
  onKeyPress,
}: EditValues) => {
  const loadingAdd = useSelector(isLoadingAdd);
  const loadingEdit = useSelector(isLoadingEdit);

  return (
    <form className=' m-auto w-1/2' onSubmit={onSubmit}>
      <Input
        labelText='Title task'
        name='title'
        type='text'
        placeholder='Title task'
        value={values?.title}
        variant='filled'
        autocomplete='off'
        onHandleChange={onHandleValues}
        onKeyPress={onKeyPress}
      />

      <Textarea
        name='description'
        rows={4}
        placeholder='Learn MongoDB'
        value={values?.description}
        onHandleChange={onHandleValues}
        onKeyPress={onKeyPress}
      />

      <div className='flex'>
        {editValues && (
          <button
            type='button'
            onClick={() => {
              setEditMode((prev: boolean) => !prev);
              resetValues();
            }}
            disabled={loadingAdd}
            className='
         mr-2
         mb-2
         mt-2
         flex
         items-center
         justify-center
         gap-4
         rounded-lg
          bg-blue-700
          px-5
         py-2.5
         text-sm
         font-medium
         text-white
         hover:bg-blue-800
         focus:outline-none
         focus:ring-2
         focus:ring-blue-300
         disabled:cursor-progress
         disabled:opacity-70
        disabled:hover:bg-blue-700
        dark:bg-blue-600
        dark:focus:ring-blue-800
         '
          >
            Cancel
          </button>
        )}
        <button
          type='button'
          disabled={loadingAdd}
          onClick={onSubmit}
          className={`
         mr-2
         mb-2
         mt-2
         flex
         items-center
         justify-center
         gap-4
         rounded-lg
          ${editValues ? 'bg-blue-900' : 'bg-blue-700'} ,
          px-5
         py-2.5
         text-sm
         font-medium
         text-white
         hover:bg-blue-800
         focus:outline-none
         focus:ring-2
         focus:ring-blue-300
         disabled:cursor-progress
         disabled:opacity-70
        disabled:hover:bg-blue-700
         `}
        >
          {editValues
            ? 'Editar'
            : loadingEdit
            ? 'Editando...'
            : loadingAdd
            ? 'Agregando...'
            : 'Agregar'}
          {loadingAdd || (loadingEdit && <Spinner />)}
        </button>
      </div>
    </form>
  );
};
