type TypeInput =
  | 'email'
  | 'password'
  | 'text'
  | 'number'
  | 'date'
  | 'time'
  | 'tel'
  | 'url'
  | 'search'
  | 'color'
  | 'range'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'week'
  | 'datetime-local'
  | 'submit'
  | 'reset'
  | 'button'
  | 'checkbox'
  | 'radio';

interface InputProps {
  autocomplete?: string;
  labelText: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  type: TypeInput;
  value: string;
  variant: 'outline' | 'filled';
  onHandleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  autocomplete,
  labelText,
  name,
  placeholder,
  required,
  type,
  value,
  variant,
  onHandleChange,
}: InputProps): JSX.Element => {
  const VariantInput = (variant: string) => {
    switch (variant) {
      case 'outline':
        return (
          <>
            <label
              htmlFor={name}
              className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 '
            >
              {labelText}
            </label>
            <input
              onChange={onHandleChange}
              autoComplete={autocomplete}
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              id={name}
              name={name}
              placeholder={placeholder}
              required={required}
              type={type}
              value={value}
            />
          </>
        );

      case 'filled':
        return (
          <>
            <label htmlFor={name} className='text-sm '>
              {labelText}
            </label>
            <input
              onChange={onHandleChange}
              autoComplete={autocomplete}
              id={name}
              name={name}
              placeholder={placeholder}
              required={required}
              type={type}
              value={value}
              className='block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 '
            />
          </>
        );

      default:
        return <p>adsda</p>;
    }
  };

  return (
    <div className='relative z-0 w-full group'>{VariantInput(variant)}</div>
  );
};
