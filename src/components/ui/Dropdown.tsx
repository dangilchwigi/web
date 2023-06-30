import React, { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

type DropdownItem = {
  label: string;
  value: string;
  disable?: boolean;
};

interface Props {
  label: string;
  items: DropdownItem[];
  onSelectItemHandler?: (label: string) => void;
}

const Dropdown = ({ label, items, onSelectItemHandler }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<DropdownItem | null>(null);

  const handleItemClick = (item: DropdownItem) => {
    setCurrentItem(item);
    setIsOpen(false);
    if (onSelectItemHandler) {
      onSelectItemHandler(item.value);
    }
  };

  return (
    <div className='relative'>
      <button
        className='border-[1px] border-Primary px-4 py-3  flex justify-between w-[300px]'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className='body1'>{currentItem?.label ?? label}</span>
        <MdKeyboardArrowDown
          size={24}
          className={`text-Primary ${isOpen && 'rotate-180'}`}
        />
      </button>
      {isOpen && (
        <div className='w-fit max-h-[240px] overflow-scroll'>
          {items.map((item) => (
            <button
              key={item.value}
              className={`w-[300px] h-[48px] px-4 py-3 body1 flex justify-start ${
                currentItem?.value === item.value
                  ? 'text-Primary'
                  : item.disable
                  ? 'text-Gray'
                  : 'text-Secondary'
              } `}
              onClick={() => handleItemClick(item)}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
