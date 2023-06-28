import React from 'react';

interface Props {
  label: string;
  onClickHandler?: () => void;
  isActive?: boolean;
}

const Chip = (props: Props) => {
  const { label, onClickHandler, isActive = false } = props;

  const className = (() => {
    let baseClasses =
      'small w-fit h-fit px-5 py-2 border-[1px] border-Primary rounded-3xl cursor-pointer';

    if (isActive) {
      baseClasses += ' bg-Primary text-White';
    } else {
      baseClasses += ' bg-White text-Primary';
    }

    return baseClasses;
  })();
  return (
    <div className={className} onClick={onClickHandler}>
      {label}
    </div>
  );
};

export default Chip;
