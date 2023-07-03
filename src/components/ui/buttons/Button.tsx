import React, { ButtonHTMLAttributes, ReactNode } from 'react';

type Type = 'primary' | 'secondary';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: Type;
  children: ReactNode;
}

const Button = ({ children, theme = 'primary', ...props }: Props) => {
  const className = (() => {
    let baseClasses = 'body2 px-8 py-[14px] rounded ';

    if (props.disabled) {
      baseClasses += ' bg-LightGray text-Gray ';
    } else {
      baseClasses += ' active:opacity-60 bg-Primary cursor-pointer';
      if (theme === 'primary') {
        baseClasses += ' text-White';
      } else {
        baseClasses += ' text-Primary';
      }
    }

    if (props.className) {
      baseClasses += ` ${props.className}`;
    }

    return baseClasses;
  })();
  return (
    <button {...props} className={className}>
      {children}
    </button>
  );
};

export default Button;
