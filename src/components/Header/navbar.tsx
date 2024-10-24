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

function Navbar() {
  const [showDesktopMenu, setShowDesktopMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in (this is a placeholder, replace with actual logic)
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  const desktopMenuHandler = () => {
    setShowDesktopMenu((prevData) => !prevData);
  };

  return (
    <nav
      className={`relative z-50 w-full min-h-[10vh] h-auto flex items-center justify-between xmd:flex-row xmd:justify-between bg-white px-6 lg:px-12 py-5 sticky top-0 shadow-navbar text-baseBlack`}
      data-testid="navbar"
    >
      <h1
        data-testid="homePage"
        onClick={() => {
          navigate("/");
        }}
        className="hover:cursor-pointer inline-flex items-center justify-start gap-x-2 text-primary capitalize font-medium text-xl"
      >
        <img src={logoUrl} alt="Mobylife Logo" className="w-auto h-12" />{" "}
        MobyLife
      </h1>

      <CategoriesMenu />

      <div className="xmd:hidden flex gap-5" data-testid="userIcon">
        <Search strokeWidth={1.5} className="w-12 h-12 text-black" />
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
            <img
              onClick={() => setShowMenu(false)}
              src={closeIconUrl}
              alt="Close Icon"
            />
          </div>
          <div className="flex flex-col gap-3 items-center">
            {/* <CategoriesMenu setShowMenu={setShowMenu} /> */}
          </div>
        </div>
      )}

      <div className="hidden xmd:flex items-center justify-end sm:gap-x-5 lg:gap-x-10">
        {isLoggedIn ? (
          <div
            onClick={desktopMenuHandler}
            className="relative cursor-pointer"
            data-testid="desktopMenuIcon"
          >
            <img
              src={userIconUrl}
              alt="Profile Icon"
              className="w-7 h-7"
              data-testid="profileIcon"
            />
          </div>
        ) : (
          <div
            onClick={() => navigate("/get-started")}
            className="relative cursor-pointer"
            data-testid="getStartedIcon"
          >
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-3xl"
              data-testid="getStartedButton"
            >
              Get Started
            </button>
          </div>
        )}
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