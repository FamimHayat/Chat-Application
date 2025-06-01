import { useState } from "react";
import { GiImperialCrown } from "react-icons/gi";
import { CiSettings } from "react-icons/ci";
import { BsChatSquareQuoteFill } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { PiDotsThreeCircleFill } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-primary pr-2 xl:w-2xs">
      {/* Hamburger for screens < xl */}
      <div className="xl:hidden p-4 flex justify-between items-center bg-primary border-b border-base">
        <div className="flex items-center gap-2">
          <GiImperialCrown className="text-[25px] text-base rotate-[320deg]" />
          <h1 className="text-4xl font-semibold font-headerFont text-brand underline">
            royal chat
          </h1>
        </div>
        <button
          onClick={toggleMenu}
          className="text-brand text-3xl cursor-pointer"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <IoMdClose /> : <RxHamburgerMenu />}
        </button>
      </div>

      {/* Sidebar: hidden < xl unless toggled */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } xl:flex flex-col xl:h-dvh rounded-r-4xl border-r-3 border-base signIn-shadow bg-primary`}
      >
        {/* Sidebar Header */}
        <div className=" hidden xl:flex justify-center items-center mt-5 px-5 gap-1">
          <div className="rotate-[320deg]">
            <GiImperialCrown className="text-[25px] text-base" />
          </div>
          <h1 className="text-[35px] font-semibold font-headerFont text-brand underline">
            royal chat
          </h1>
        </div>

        {/* Menu Items */}
        <ul className="flex flex-col pt-20  items-center w-full mt-auto xl:pt-0">
          <li className="w-full">
            <Link
              to="/chat"
              className="block w-full px-5 py-2 my-2 cursor-pointer hover:underline text-primary bg-brand hover:text-text hover:bg-secondary"
            >
              <div className="flex justify-center items-center gap-2">
                <BsChatSquareQuoteFill className="text-[20px]" />
                <p className="text-[24px] font-semibold">Chat</p>
              </div>
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="/groups"
              className="block w-full px-5 py-2 my-2 cursor-pointer hover:underline text-brand hover:text-text hover:bg-secondary"
            >
              <div className="flex justify-center items-center gap-2">
                <HiUserGroup className="text-[20px]" />
                <p className="text-[24px] font-semibold">Group</p>
              </div>
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="/people"
              className="block w-full px-5 py-2 my-2 cursor-pointer hover:underline text-brand hover:text-text hover:bg-secondary"
            >
              <div className="flex justify-center items-center gap-2">
                <PiDotsThreeCircleFill className="text-[20px]" />
                <p className="text-[24px] font-semibold">People</p>
              </div>
            </Link>
          </li>
        </ul>

        {/* Sign-in / Sign-out Links */}
        <div className="flex justify-center mb-20 gap-2 px-5 py-2 mt-6 text-brand xl:mb-0">
          <Link
            to="/SignIn"
            className="text-[18px] transition-all hover:text-stone-50 hover:underline"
          >
            sign-in
          </Link>
          /
          <Link
            to="/SignOut"
            className="text-[18px] transition-all hover:text-stone-50 hover:underline"
          >
            sign-out
          </Link>
        </div>

        {/* User Info */}
        <div className="flex justify-center mt-auto mb-10 px-2 pb-6 gap-2 items-center xl:mb-0 xl:border-0">
          <div className="w-16 overflow-hidden rounded-full">
            <img src="/my-image.jpg" alt="User avatar of famim yash" />
          </div>
          <div>
            <h3 className="text-[22px] text-brand">famim yash</h3>
            <div className="flex gap-5 items-center">
              <Link to="/myProfile">
                <p className="text-[16px] text-brand hover:text-base hover:underline">
                  edit profile
                </p>
              </Link>
              <Link to="/myProfile">
                <CiSettings className="text-[20px] text-brand" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
