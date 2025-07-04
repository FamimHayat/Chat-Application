import React, { useState } from "react";
import { FaUserGroup } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { LuMessageCircleCode } from "react-icons/lu";
import { SlSettings } from "react-icons/sl";
import { Link } from "react-router";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { signedUser } from "../../redux-store/slices/authSlice";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const reduxData = useSelector((state) => state.userInfo.userData);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signedUser(null));
  };

  return (
    <nav
      className="bg-[#202020] border-b-4 xl:h-dvh w-full xl:w-fit border-r-4 border-[#4f4e4e] pr-6"
      aria-label="Main Navigation"
    >
      <div className="flex h-full px-3 flex-col xl:flex-col xl:justify-start pt-5 xl:pt-0">
        {/* Top row: Brand logo and profile side-by-side on small screens */}
        <div className="flex items-center justify-between xl:flex-col xl:items-start">
          {/* Brand Logo */}
          <div className="py-3 text-4xl text-white font-headerFont xl:w-[200px]">
            royal chat
          </div>

          {/* Profile + toggle container */}
          <div className="flex items-center gap-3 pl-5 xl:hidden">
            <div className="flex items-center gap-3">
              <img
                src={reduxData.photoURL}
                alt="users-image"
                className="w-15 h-15 rounded-full p-0.5 border border-gray-300"
              />
              <div className="flex flex-col gap-1">
                <h2 className="text-[19px] text-white hidden md:block">
                  {reduxData.displayName}
                </h2>
                <Link
                  to="/userProfile"
                  className="flex gap-2 items-center group"
                >
                  <p className="text-white group-hover:underline group-hover:text-blue-300 cursor-pointer hidden md:block">
                    edit profile
                  </p>
                  <SlSettings className="flex md:hidden text-white group-hover:text-blue-300" />
                </Link>
              </div>
            </div>

            {/* Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Collapse menu" : "Expand menu"}
              className="ml-4 flex items-center justify-center text-black text-3xl"
              type="button"
              style={{ userSelect: "none" }}
            >
              {menuOpen ? (
                <HiChevronUp className="text-white cursor-pointer" />
              ) : (
                <HiChevronDown className="text-white cursor-pointer" />
              )}
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <ul
          className={`
            flex flex-col gap-2 text-[28px] text-black mt-8 mb-4 xl:mt-40 
            transition-all duration-300 overflow-hidden
            ${menuOpen ? "max-h-[500px]" : "max-h-0"}
            xl:max-h-full xl:flex-col xl:gap-4
          `}
        >
          <li className="justify-between items-center cursor-pointer border-2 px-1 transition-all hover:underline group hover:bg-[#8c8c8c]">
            <Link
              to="/"
              className="w-full py-3 flex text-white group-hover:text-black focus:underline focus:italic"
            >
              <div className="flex justify-between items-center w-full">
                Chat List
                <LuMessageCircleCode className="text-[25px] text-white" />
              </div>
            </Link>
          </li>
          <li className="justify-between items-center cursor-pointer border-2 px-1 transition-all hover:underline group hover:bg-[#8c8c8c] focus:bg-[#8c8c8c]">
            <Link
              to="/groups"
              className="w-full py-3 text-white group-hover:text-black"
            >
              <div className="flex justify-between items-center w-full">
                Groups
                <FaUserGroup className="text-[25px] text-white" />
              </div>
            </Link>
          </li>
          <li className="flex justify-between items-center cursor-pointer border-2 px-1 transition-all hover:underline group hover:bg-[#8c8c8c] focus:bg-[#8c8c8c]">
            <Link
              to="/"
              className="w-full py-3 text-white group-hover:text-black"
            >
              <div className="flex justify-between items-center w-full">
                Friends
                <IoIosPeople className="text-[30px] text-white" />
              </div>
            </Link>
          </li>
        </ul>

        {/* Profile section below menu on xl and above */}
        <div className="mt-auto">
          <div className="hidden xl:flex gap-2 mb-5 items-center">
            <img
              src={reduxData.photoURL}
              alt="users-image"
              className="w-15 h-15 rounded-full p-0.5 border border-gray-300"
            />
            <div className="flex flex-col gap-2">
              <h2 className="text-[19px] text-white">
                {reduxData.displayName}
              </h2>
              <Link to="/myProfile" className="flex gap-3 items-center group">
                <p className="text-white group-hover:underline group-hover:text-blue-300 cursor-pointer">
                  edit profile
                </p>
                <SlSettings className="flex md:hidden" />
              </Link>
            </div>
          </div>
          <button
            onClick={handleSignOut}
            className="w-full py-3 my-3 bg-red-500 cursor-pointer rounded-2xl text-white hover:bg-red-600"
          >
            sign out
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
