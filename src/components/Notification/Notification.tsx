import React, { useEffect, useState } from 'react';
import OneNotification from './OneNotification';
import toast from 'react-hot-toast';

interface NotificationProps {
  id: string;
  message: string;
  isRead: boolean;
  content: string;
  type: 'info' | 'warning' | 'error';
  createdAt: Date;
}

function Notification() {
  const [allNotifications, setAllNotifications] = useState<NotificationProps[]>([]);
  const [selectedNotificationsIds, setSelectedNotificationsIds] = useState<string[]>([]);
  const [notificationDivs, setNotificationDivs] = useState<JSX.Element[]>([]);

  useEffect(() => {
    // Set dummy notifications
    const dummyNotifications: NotificationProps[] = [
      { id: '1', message: 'Notification 1', isRead: false, content: 'Content 1', type: 'info', createdAt: new Date() },
      { id: '2', message: 'Notification 2', isRead: false, content: 'Content 2', type: 'info', createdAt: new Date() },
      { id: '3', message: 'Notification 3', isRead: false, content: 'Content 3', type: 'info', createdAt: new Date() },
    ];
    setAllNotifications(dummyNotifications);
  }, []);

  const handleNotificationPopup = () => {
    // Close notification popup logic here
  };

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    if (checked) {
      const notificationIds = allNotifications.map((notification) => notification.id);
      setSelectedNotificationsIds(notificationIds);
    } else {
      setSelectedNotificationsIds([]);
    }
  };

  const handleDeletingNotifications = () => {
    if (selectedNotificationsIds.length === 0) {
      toast.error('Please select notifications to delete before deleting');
    } else {
      const updatedNotifications = allNotifications.filter((notification) => {
        return !selectedNotificationsIds.includes(notification.id);
      });
      setAllNotifications(updatedNotifications);
      setSelectedNotificationsIds([]);
    }
  };

  const updateSelectedNotifications = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (selectedNotificationsIds.length > 0) {
      const updatedNotifications = allNotifications.map((notification) => {
        if (selectedNotificationsIds.includes(notification.id)) {
          return { ...notification, isRead: true };
        } else {
          return notification;
        }
      });
      setAllNotifications(updatedNotifications);
      toast.success('Selected notifications marked as read');
      setSelectedNotificationsIds([]);
    } else {
      toast.error('No notifications selected');
    }
  };

  useEffect(() => {
    const notificationJSX: JSX.Element[] = [];
    allNotifications.forEach((notification, index) => {
      notificationJSX.push(<OneNotification notificationProp={notification} key={index} />);
    });
    setNotificationDivs(notificationJSX);
  }, [allNotifications]);

  return (
    <div className="fixed animate-slideInFromTop inset-0 z-40 flex pt-[60px] xmd:pt-[30px] px-6 xmd:px-16 md:px-36 lg:px-48 items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-out">
      <div className="bg-white h-[550px] w-full p-8 pb-2 rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="text-[18px] font-bold">Notification</div>
          <div onClick={handleNotificationPopup} className="text-[25px] font-medium cursor-pointer">
            X
          </div>
        </div>

        {notificationDivs.length > 0 && (
          <div className="flex gap-3 items-center px-4">
            <input
              style={{ height: '1.2rem', width: '1.2rem', cursor: 'pointer' }}
              type="checkbox"
              id="selectAll"
              checked={allNotifications.length === selectedNotificationsIds.length}
              onChange={handleSelectAll}
              name="selectAll"
            />
            <label className="cursor-pointer" htmlFor="selectAll">
              Select All
            </label>
          </div>
        )}
        <div className="w-full h-full overflow-y-scroll overflow-x-auto">
          <div className="w-[600px] xmd:w-full flex flex-col gap-2">
            {notificationDivs.length > 0 && notificationDivs}
            {notificationDivs.length === 0 && <p className="text-center">You have no notifications</p>}
          </div>
        </div>
        {allNotifications.length > 0 && (
          <div className="py-2 text-[15px] flex flex-col gap-y-2 items-center sm:flex-row justify-between">
            <div onClick={updateSelectedNotifications} className="inline-block hover:underline cursor-pointer">
              Mark all selected as read
            </div>
            <div onClick={handleDeletingNotifications} className="inline-block hover:underline cursor-pointer">
              Clear selected
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Notification;