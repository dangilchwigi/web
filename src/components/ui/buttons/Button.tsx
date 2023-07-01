import React, { ButtonHTMLAttributes } from 'react';

type Type = 'primary' | 'secondary';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: Type;
}

const Button = ({ type, children, theme = 'primary', ...props }: Props) => {
  const className = (() => {
    let baseClasses = 'body2 px-8 py-[14px] rounded ';

    if (props.disabled) {
      baseClasses += ' bg-LightGray text-Gray ';
    } else {
      if (theme === 'primary') {
        baseClasses +=
          ' active:opacity-60 bg-Primary text-White cursor-pointer';
      } else {
        baseClasses +=
          ' active:opacity-60 bg-Secondary text-Primary cursor-pointer';
      }
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

export default Button;
