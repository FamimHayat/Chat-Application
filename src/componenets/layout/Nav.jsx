import React from "react";
import { Link } from "react-router";
import { GiImperialCrown } from "react-icons/gi";
import { CiSettings } from "react-icons/ci"
import { BsChatSquareQuoteFill } from "react-icons/bs"
import { HiUserGroup } from "react-icons/hi"
import { PiDotsThreeCircleFill } from "react-icons/pi"

<GiImperialCrown />

const Nav = () => {
  return (
    <nav className="flex flex-col h-dvh bg-primary w-fit rounded-r-4xl border-r-3 border-base">
      <div className="flex justify-center items-center mt-5 px-5 gap-1 ">
        <div className="rotate-320">
          <GiImperialCrown className="text-[25px] text-base" />
        </div>

        <h2 className="text-[35px] font-semibold font-headerFont text-brand underline">
          royal chat
        </h2>
      </div>
      <ul className="w-full mt-50 ">
        <li className="w-full">
          <Link
            to="/"
            className=" w-full  px-5 py-2 my-2 cursor-pointer hover:underline text-brand hover:text-text hover:bg-secondary"
          >
            <div className="flex items-center gap-2">
              <BsChatSquareQuoteFill className="text-[20px] font-semibold" />
              <p className="text-[30px] font-semibold"> Chat</p>
            </div>
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="w-full  px-5 py-2 my-2 cursor-pointer hover:underline text-brand hover:text-text hover:bg-secondary "
          >
            <div className="flex items-center gap-3 ">
              <HiUserGroup className="text-[20px] font-semibold" />
              <p className="text-[30px] font-semibold"> Group</p>
            </div>
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="w-full   px-5 py-2 my-2 cursor-pointer hover:underline  text-brand hover:text-text hover:bg-secondary"
          >
            <div className="flex items-center gap-2">
              <PiDotsThreeCircleFill className="text-[20px] font-semibold" />
              <p className="text-[30px] font-semibold"> People</p>
            </div>
          </Link>
          <div className="flex gap-2 px-5 py-2 my-2 text-brand mt-10">
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
        </li>
      </ul>
      <div className="mt-auto px-2 pb-15 flex gap-2 items-center">
        <div className="w-15 overflow-hidden rounded-full  ">
          <img src="/my-image.jpg" alt="" />
        </div>
        <div>
          <h3 className="text-[22px] text-brand ">famim yash</h3>
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
    </nav>
  );
};

export default Nav;
