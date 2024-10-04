import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DesktopMenu from '../Menu/DesktopMenu';
import CategoriesMenu from '../Menu/CategoriesMenu';
// import NotificationLayout from '../Notification/NotificationLayout';
import { closeIconUrl, logoUrl, menuIconUrl, userIconUrl } from '../../assets/images/dynamicImages/images';

function Navbar() {
  const [showDesktopMenu, setShowDesktopMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const desktopMenuHandler = () => {
    setShowDesktopMenu((prevData) => !prevData);
  };

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  const handleSearch = () => {
    navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <nav
      className={`relative z-50 w-full min-h-[10vh] h-auto flex items-center justify-between xmd:flex-row xmd:justify-between bg-white px-6 lg:px-12 py-5 sticky top-0 shadow-navbar text-baseBlack`}
      data-testid="navbar"
    >
      <h1
        data-testid="homePage"
        onClick={() => {
          navigate('/');
        }}
        className="cursor-pointer flex items-center justify-start gap-x-2 text-primary capitalize font-medium text-xl"
      >
        <img src={logoUrl} alt="Mobylife Logo" className='w-[20%]'/>
      </h1>

      <div className="hidden lg:w-[40%] xmd:w-[40%] min-h-10 xmd:flex items-center justify-between gap-x-1 px-4 py-2 border border-neutrals500 bg-white rounded-3xl">
        <input
          className="w-full h-[100%] border-none outline-none bg-white text-grey2 text-base placeholder-grey2"
          type="text"
          id="searchInput"
          placeholder="search for anything"
          value={searchTerm}
          onChange={handleSearchInputChange}
          onKeyDown={handleSearchSubmit}
          data-testid="searchInput"
        />
        <Search onClick={handleSearch} strokeWidth={1.5} className="text-orange cursor-pointer" />
      </div>

      <div className="xmd:hidden flex gap-5" data-testid="userIcon">
        <Search strokeWidth={1.5} className="w-10 h-9 text-black" />
        <img
          onClick={() => setShowMenu((prevState) => !prevState)}
          src={menuIconUrl}
          className="w-9 h-9"
          alt="Menu Icon"
          data-testid="menuIcon"
        />
      </div>

      {showMenu && (
        <div
          className={`absolute top-20 left-0 w-[100%] bg-slate-100 h-[500px] p-6 flex flex-col gap-6`}
          data-testid="mobileMenu"
        >
          <div className="flex justify-between">
            <img onClick={() => setShowMenu(false)} src={closeIconUrl} alt="Close Icon" />
          </div>
          <div className="flex flex-col gap-3 items-center">
            <CategoriesMenu setShowMenu={setShowMenu} />
          </div>
        </div>
      )}

      <div className="hidden xmd:flex items-center justify-end sm:gap-x-5 lg:gap-x-10">
        <div onClick={desktopMenuHandler} className="relative cursor-pointer" data-testid="desktopMenuIcon">
          <img src={userIconUrl} alt="User Icon" className="w-7 h-7" data-testid="userIcon" />
        </div>
      </div>
      {showDesktopMenu && (
        <div
          className="absolute top-[130px] right-[25%] xmd:right-6 xmd:top-[12vh]"
          onClick={() => setShowDesktopMenu(false)}
        >
          <DesktopMenu />
        </div>
      )}
    </nav>
  );
}

export default Navbar;