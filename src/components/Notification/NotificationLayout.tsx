import React, { useEffect, useState } from 'react';
import Notification from './Notification';
import { io } from 'socket.io-client';
import { NotificationProps } from './OneNotification';
import notificaticationBellSound from './assets/audios/mixkit-achievement-bell-600.wav';

interface notifications {
  allNotifications: NotificationProps[];
  createdAt?: Date;
  id: string;
  unRead: string | number;
  updatedAt?: Date;
}

interface notificationcontent {
  action: string;
  sound?: boolean;
  notifications: notifications;
}

function NotificationLayout() {
  const [openNotification, setOpenNotification] = useState(false);
  const [unreadNotifications, setUnreadNotifications] = useState<number>(0);
  const [allNotifications, setAllNotifications] = useState<NotificationProps[]>([]);
  const socketUrl = 'http://localhost:4000'; // Dummy socket URL
  const [loading, setLoading] = useState(true);

  const sortedNotifications = (notifications: NotificationProps[]) => {
    return notifications.sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
  };

  useEffect(() => {
    // Set dummy notifications
    const dummyNotifications: NotificationProps[] = [
      { id: '1', content: 'Notification 1', type: 'info', isRead: false, createdAt: new Date() },
      { id: '2', content: 'Notification 2', type: 'info', isRead: false, createdAt: new Date() },
      { id: '3', content: 'Notification 3', type: 'info', isRead: false, createdAt: new Date() },
    ];
    setAllNotifications(sortedNotifications(dummyNotifications));
    setUnreadNotifications(dummyNotifications.length);
    setLoading(false);
  }, []);

  useEffect(() => {
    let unread: number = 0;
    allNotifications.forEach((notification) => {
      if (notification.isRead === false) {
        unread += 1;
      }
    });
    setUnreadNotifications(unread);
  }, [allNotifications]);

  useEffect(() => {
    const socket = io(socketUrl);

    socket.on('connect', () => {
      console.log('Socket.IO Connection established');
    });

    socket.on('notification', (content: notificationcontent) => {
      if (content.action === `notification`) {
        setAllNotifications(sortedNotifications(content.notifications.allNotifications));
        setUnreadNotifications(Number(content.notifications.unRead));
        if (content.sound === true) {
          playNotificationSound();
        }
      }
    });

    socket.on('disconnect', () => {
      console.log('Socket.IO connection closed');
    });

    return () => {
      socket.disconnect();
    };
  }, [socketUrl, unreadNotifications]);

  return <div>{!loading && openNotification && <Notification />}</div>;
}

const playNotificationSound = () => {
  const audio = new Audio(notificaticationBellSound);
  audio.volume = 0.2;
  audio.play().catch((error) => console.error('Error playing sound:', error));
};

export default NotificationLayout;