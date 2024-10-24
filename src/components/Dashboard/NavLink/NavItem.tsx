import React from 'react';
import { NavLink } from 'react-router-dom';

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center mt-2 gap-2 text-l ${isActive ? 'text-blue-500 border-l-4 border-blue-500 pl-2' : ''}`
      }
    >
      {icon}
      {label}
    </NavLink>
  );
};

export default NavItem;