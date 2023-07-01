import React, { useRef, useEffect } from 'react';
import Button from './buttons/Button';
import OutlineButton from './buttons/OutlineButton';

interface Props {
  title: string;
  content: string;
  isOpen: boolean;
  isClose: () => void;
  actionLabel?: string;
  action?: () => void;
}

export const Dialog = ({
  title,
  content,
  isOpen,
  isClose,
  actionLabel,
  action,
}: Props) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePositioning = () => {
      if (dialogRef.current) {
        dialogRef.current.style.top = `${
          isOpen
            ? window.innerHeight / 2 - dialogRef.current.clientHeight / 2
            : -1000
        }px`;
      }
    };

    handlePositioning();
    window.addEventListener('resize', handlePositioning);
    window.addEventListener('scroll', handlePositioning);

    return () => {
      window.removeEventListener('resize', handlePositioning);
      window.removeEventListener('scroll', handlePositioning);
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className='fixed z-10 w-screen h-screen bg-gray-500 bg-opacity-30 top-0 bottom-0 left-0 right-0' />
      )}
      <div
        ref={dialogRef}
        className={`fixed left-1/2 z-20 w-[324px] p-4 bg-white rounded shadow transform -translate-x-1/2
          ${isOpen ? '-translate-y-1/2' : '-translate-y-full'}`}
      >
        <div className='headline2 mb-4'>{title}</div>
        <div className='body2'>{content}</div>
        <div className='mt-8 flex justify-end w-full'>
          <OutlineButton onClick={isClose}>닫기</OutlineButton>
          {actionLabel && action && (
            <Button className='ml-4'>{actionLabel}</Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Dialog;
