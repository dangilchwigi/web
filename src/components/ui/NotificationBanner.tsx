import React from 'react';
import { MdNotifications } from 'react-icons/md';

interface Props {
  notificationText: string;
}

const NotificationBanner = ({ notificationText }: Props) => {
  return (
    <div className="bg-Primary flex items-center px-2 py-3.5 rounded">
      <MdNotifications size={24} color="white" />
      <p className="headline4 text-white ml-2">{notificationText}</p>
    </div>
  );
};

export default NotificationBanner;
