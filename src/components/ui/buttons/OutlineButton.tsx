import React, { ButtonHTMLAttributes } from 'react';

const OutlineButton = ({
  type,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const className = (() => {
    let baseClasses = 'body2 px-8 py-[14px] rounded border-[1px]  bg-White';

    if (props.disabled) {
      baseClasses += ' border-LightGray text-Gray';
    } else {
      baseClasses +=
        ' border-Primary text-Primary active:bg-opacity-60 active:bg-Primary cursor-pointer';
    }

    if (props.className) {
      baseClasses += ` ${props.className}`;
    }

    return baseClasses;
  })();
  return (
    <button type={type} {...props} className={className}>
      {children}
    </button>
  );
};

export default OutlineButton;
