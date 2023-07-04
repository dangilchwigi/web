import React, { ReactNode } from 'react';
import PortalDialog from './PortalDialog';

type Props = {
  isOpen: boolean;
  children: ReactNode;
};

const Dialog = ({ children, isOpen }: Props) => {
  if (!isOpen) {
    return null;
  }
  return (
    <PortalDialog>
      <div className='fixed flex justify-center items-center top-0 left-0 w-full h-full bg-Gray opacity-50'>
        <div className='bg-White w-fit h-fit p-4'>{children}</div>
      </div>
    </PortalDialog>
  );
};

export default Dialog;
