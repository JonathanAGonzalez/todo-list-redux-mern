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
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onHandleChange: (e: React.FormEvent<HTMLInputElement>) => void;
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
  onKeyPress,
  onHandleChange,
}: InputProps): JSX.Element => {
  const VariantInput = (variant: string) => {
    switch (variant) {
      case 'outline':
        return (
          <>
            <label
              htmlFor={name}
              className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500 '
            >
              {labelText}
            </label>
            <input
              onChange={onHandleChange}
              onKeyUp={onKeyPress}
              autoComplete={autocomplete}
              className='peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-black dark:focus:border-blue-500'
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
              onKeyUp={onKeyPress}
              autoComplete={autocomplete}
              id={name}
              name={name}
              placeholder={placeholder}
              required={required}
              type={type}
              value={value}
              className='sm:text-md block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 text-gray-900 focus:border-blue-500 focus:ring-blue-500 '
            />
          </>
        );

      default:
        return <p>adsda</p>;
    }
  };

  return (
    <div className='group relative z-0 w-full'>{VariantInput(variant)}</div>
  );
};
