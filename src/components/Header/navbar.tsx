import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DesktopMenu from "../Menu/DesktopMenu";
import CategoriesMenu from "../Menu/CategoriesMenu";
import { Search } from 'lucide-react';
import {
  closeIconUrl,
  logoUrl,
  menuIconUrl,
  userIconUrl,
} from "../../assets/images/images";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  const [showDesktopMenu, setShowDesktopMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  const desktopMenuHandler = () => {
    setShowDesktopMenu((prevData) => !prevData);
  };

  return (
    <nav
      className="relative z-50 w-full min-h-[10vh] h-auto flex items-center justify-between bg-white px-6 lg:px-12 py-5 sticky top-0 shadow-md text-baseBlack"
      data-testid="navbar"
    >
      <h1
        data-testid="homePage"
        onClick={() => {
          navigate("/");
        }}
        className="hover:cursor-pointer inline-flex items-center justify-start gap-x-2 text-primary capitalize font-semibold text-2xl"
      >
        <img src={logoUrl} alt="Mobylife Logo" className="w-auto h-12" />{" "}
        MobyLife
      </h1>

      <CategoriesMenu />

      <div className="xmd:hidden flex gap-5" data-testid="userIcon">
        <Search strokeWidth={1.5} className="w-8 h-8 text-gray-700 hover:text-blue-500 transition duration-300" />
        <img
          onClick={() => setShowMenu((prevState) => !prevState)}
          src={menuIconUrl}
          className="w-8 h-8 cursor-pointer"
          alt="Menu Icon"
          data-testid="menuIcon"
        />
      </div>

      {showMenu && (
        <div
          className="absolute top-20 left-0 w-full bg-white shadow-lg h-auto p-6 flex flex-col gap-6"
          data-testid="mobileMenu"
        >
          <div className="flex justify-between">
            <img
              onClick={() => setShowMenu(false)}
              src={closeIconUrl}
              alt="Close Icon"
              className="w-8 h-8 cursor-pointer"
            />
          </div>
          <div className="flex flex-col gap-3 items-center">
            {/* <CategoriesMenu setShowMenu={setShowMenu} /> */}
          </div>
        </div>
      )}

      <div className="hidden xmd:flex items-center justify-end gap-x-5 lg:gap-x-10">
        {isLoggedIn ? (
          <div
            onClick={desktopMenuHandler}
            className="relative cursor-pointer"
            data-testid="desktopMenuIcon"
          >
            <FaUserCircle className="w-10 h-14 rounded-full text-gray-400" />
          </div>
        ) : (
          <div
            onClick={() => navigate("/get-started")}
            className="relative cursor-pointer"
            data-testid="getStartedIcon"
          >
            <button
              className="w-auto bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-300"
              data-testid="getStartedButton"
            >
              Kora konte
            </button>
          </div>
        )}
      </div>
      {showDesktopMenu && (
        <div
          className="absolute top-[130px] right-[25%] xmd:right-6 xmd:top-[12vh] bg-white shadow-lg rounded-lg p-4"
          onClick={() => setShowDesktopMenu(false)}
        >
          <DesktopMenu />
        </div>
      )}
    </nav>
  );
}

export default Navbar;