interface TextareaProps {
  textLabel?: string;
  rows: number;
  name: string;
  placeholder?: string;
  value: string;
  onHandleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Textarea = ({
  textLabel,
  rows,
  name,
  placeholder,
  value,
  onHandleChange,
}: TextareaProps): JSX.Element => {
  return (
    <>
      <label
        htmlFor='message'
        className='block mb-2 text-sm font-medium text-gray-900'
      >
        {textLabel}
      </label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 '
        placeholder={placeholder}
        value={value}
        onChange={onHandleChange}
      ></textarea>
    </>
  );
};
