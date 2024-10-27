import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function DesktopMenu() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="bg-baseWhite border border-neutral-300 rounded-2 w-48 p-1 text-neutral-600">
      <ul className="flex flex-col ">
        <Link to={'/favorite'}>
          <li className="hover:bg-neutral-300 pl-5 py-2 cursor-pointer">Ibyonkunda</li>
        </Link>
        <li className="hover:bg-neutral-300 pl-5 py-2 cursor-pointer" onClick={() => navigate('/user-trips')}>
          Ingendo nakoze
        </li>
        <li className="hover:bg-neutral-300 pl-5 py-2 cursor-pointer" onClick={() => navigate('/profile')}>
          Umwirondoro
        </li>
        <li className="hover:bg-neutral-300 pl-5 py-2 cursor-pointer" onClick={handleLogout}>
          Sohoka
        </li>
      </ul>
    </div>
  );
}

export default DesktopMenu;