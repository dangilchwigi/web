import React, { InputHTMLAttributes } from 'react';
import { MdClose } from 'react-icons/md';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
  errorMessage?: string;
}

const InputField = ({ isError = false, errorMessage, ...props }: Props) => {
  const className = (() => {
    let baseClasses =
      'px-4 py-3 rounded body1 border-DeepGray bg-White w-[300px] border-[1px] focus:outline-none';
    if (isError) {
      baseClasses += ' border-Error focus:border-Error text-Error';
    } else {
      baseClasses += ' border-DeepGray focus:border-Primary text-Secondary';
    }

    if (props.disabled) {
      baseClasses += ' border-Gray placeholder:text-Gray text-Gray';
    }

    if (props.className) {
      baseClasses += ` ${props.className}`;
    }

    return baseClasses;
  })();

  return (
    <div className='w-fit h-fit'>
      <input className={className} {...props} />
      {isError && !!errorMessage && (
        <span className='flex items-center mt-2 body3 text-Error'>
          <MdClose className='ml-1 mr-2' />
          <p>{errorMessage}</p>
        </span>
      )}
    </div>
  );
};

export default InputField;
