interface TextareaProps {
  textLabel?: string;
  rows: number;
  name: string;
  placeholder?: string;
  value: string;
  onHandleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}

export const Textarea = ({
  textLabel,
  rows,
  name,
  placeholder,
  value,
  onHandleChange,
  onKeyPress,
}: TextareaProps): JSX.Element => {
  return (
    <>
      <label
        htmlFor='message'
        className='mb-2 block text-sm font-medium text-gray-900'
      >
        {textLabel}
      </label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 '
        placeholder={placeholder}
        value={value}
        onChange={onHandleChange}
        onKeyUp={onKeyPress}
      ></textarea>
    </>
  );
};
