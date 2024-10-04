import React, { useState } from 'react';
import product from './assets/Avatar.svg';
import cart from './assets/Trolley.svg';
import order from './assets/Fast delivery.svg';
import user from './assets/User.svg';
import wishlist from './assets/Wishlist.svg';
import coupon from './assets/Gift card.svg';
import { Link } from 'react-router-dom';
import formatDateAndTime from '../../utils/formartDate&Time';

export interface NotificationProps {
  id: string;
  content: string;
  type: string;
  isRead: boolean;
  link?: string;
  createdAt: Date;
}

interface OneNotificationProps {
  notificationProp: NotificationProps;
}

const mapTypeImages: { [key: string]: string } = {
  product: product,
  cart: cart,
  order: order,
  user: user,
  wishlist: wishlist,
  coupon: coupon
};

function OneNotification({ notificationProp }: OneNotificationProps) {
  const [selectedNotificationsIds, setSelectedNotificationsIds] = useState<string[]>([]);
  const [openNotification, setOpenNotification] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedIds = selectedNotificationsIds;
    const name = event.target.name;
    if (selectedIds.includes(name)) {
      setSelectedNotificationsIds(selectedIds.filter((selectedId) => selectedId !== name));
    } else {
      setSelectedNotificationsIds([...selectedIds, name]);
    }
  };

  return (
    <div
      className={`flex gap-4 px-4 py-2 items-center border-b-[2px] border-neutral-300 ${
        notificationProp.isRead ? '' : 'bg-neutral-200'
      }`}
    >
      <div className="flex items-center justify-center">
        <input
          style={{ height: '1.2rem', width: '1.2rem', cursor: 'pointer' }}
          type="checkbox"
          name={notificationProp.id}
          checked={selectedNotificationsIds.includes(notificationProp.id)}
          onChange={handleChange}
        />
      </div>

      <div className="hidden sm:flex items-center w-7 mr-3">
        <img className="w-7" src={mapTypeImages[notificationProp.type]} alt="" />
      </div>

      <div className={`flex-1 flex flex-col ${notificationProp.link ? 'hover:cursor-pointer' : ''}`}>
        <div
          onClick={() => setOpenNotification(false)}
          className={`${notificationProp.link ? 'underline' : ''} + text-[.85rem] xmd:text-[.9rem] lg:text-[.95rem]`}
        >
          {notificationProp.link ? (
            <Link to={notificationProp.link || '/'}>{notificationProp.content}</Link>
          ) : (
            notificationProp.content
          )}
        </div>
        <div className="flex gap-2 text-gray-500 text-sm">
          {notificationProp.type}
          <span>&#183;</span>
          {formatDateAndTime(notificationProp.createdAt).date}
        </div>
      </div>

      {!notificationProp.isRead && <div className="w-3 h-3 bg-black rounded-full"></div>}
    </div>
  );
}

export default OneNotification;