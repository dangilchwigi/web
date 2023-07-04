import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  children: ReactNode;
};

const PortalDialog = ({ children }: Props) => {
  const dialogRoot = document.querySelector('#dialog-root');

  if (!dialogRoot) {
    return null;
  }

  return createPortal(children, dialogRoot);
};

export default PortalDialog;
