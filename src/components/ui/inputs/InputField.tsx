import React, { FC, InputHTMLAttributes } from 'react';
import { VscChromeClose } from 'react-icons/vsc';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
  errorMessage?: string;
}

const InputField: FC<Props> = ({ isError = false, errorMessage, ...props }) => {
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

    return baseClasses;
  })();

  return (
    <div className='w-fit h-fit'>
      <input className={className} {...props} />
      {isError && !!errorMessage && (
        <span className='flex items-center mt-2 body3 text-Error'>
          <VscChromeClose className='ml-1 mr-2' />
          <p>{errorMessage}</p>
        </span>
      )}
    </div>
  );
};

export default InputField;
