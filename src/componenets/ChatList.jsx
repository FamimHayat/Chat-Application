import React from "react";
import Users from "./home/Users";
import { FaSearch } from "react-icons/fa";

const ChatList = () => {
  return (
    <>
      <section className="h-dvh flex flex-col  bg-primary  max-w-2xl border-r-2 border-r-brand rounded-xl">
        <div className="flex border-b-2 border-b-brand rounded-2xl p-3 gap-3">
          <input
            type="text"
            placeholder="user name "
            className="placeholder:text-white text-[22px] w-full  p-3 text-text rounded-full bg-primaryColor outline-0 input-shadow border-3 border-secondary focus:outline-3 focus:outline-brand "
          />
          <div className=" chat-search flex justify-center items-center p-5 mx-2 hover:bg-base border-2 border-base bg-primary rounded-full group cursor-pointer">
            <FaSearch className="text-[20px] text-base group-hover:text-primary" />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4  py-2 my-3 overflow-y-scroll">
          <Users
            userImage={"/user-image (1).jpg"}
            userName={"bou"}
            lastMassage={"i love you jaan"}
            lastTime={"10.07 "}
            timeStamp={"pm"}
          />
          <Users
            userImage={"/user-image (2).jpg"}
            userName={"bou"}
            lastMassage={"i love you jaan"}
            lastTime={"10.07 "}
            timeStamp={"pm"}
          />
          <Users
            userImage={"/user-image (3).jpg"}
            userName={"bou"}
            lastMassage={"i love you jaan"}
            lastTime={"10.07 "}
            timeStamp={"pm"}
          />
          <Users
            userImage={"/user-image (4).jpg"}
            userName={"bou"}
            lastMassage={"i love you jaan"}
            lastTime={"10.07 "}
            timeStamp={"pm"}
          />
          <Users
            userImage={"/user-image (5).jpg"}
            userName={"bou"}
            lastMassage={"i love you jaan"}
            lastTime={"10.07 "}
            timeStamp={"pm"}
          />
          <Users
            userImage={"/user-image (6).jpg"}
            userName={"bou"}
            lastMassage={"i love you jaan"}
            lastTime={"10.07 "}
            timeStamp={"pm"}
          />
          <Users
            userImage={"/user-image (7).jpg"}
            userName={"bou"}
            lastMassage={"i love you jaan"}
            lastTime={"10.07 "}
            timeStamp={"pm"}
          />
          <Users
            userImage={"/user-image (8).jpg"}
            userName={"bou"}
            lastMassage={"i love you jaan"}
            lastTime={"10.07 "}
            timeStamp={"pm"}
          />
          <Users
            userImage={"/user-image (9).jpg"}
            userName={"bou"}
            lastMassage={"i love you jaan"}
            lastTime={"10.07 "}
            timeStamp={"pm"}
          />
          <Users
            userImage={"/user-image (10).jpg"}
            userName={"bou"}
            lastMassage={"i love you jaan"}
            lastTime={"10.07 "}
            timeStamp={"pm"}
          />
          <Users
            userImage={"/user-image (11).jpg"}
            userName={"bou"}
            lastMassage={"i love you jaan"}
            lastTime={"10.07 "}
            timeStamp={"pm"}
          />
          <Users
            userImage={"/user-image (12).jpg"}
            userName={"bou"}
            lastMassage={"i love you jaan"}
            lastTime={"10.07 "}
            timeStamp={"pm"}
          />
          <Users
            userImage={"/user-image (13).jpg"}
            userName={"bou"}
            lastMassage={"i love you jaan"}
            lastTime={"10.07 "}
            timeStamp={"pm"}
          />
          <Users
            userImage={"/user-image (14).jpg"}
            userName={"bou"}
            lastMassage={"i love you jaan"}
            lastTime={"10.07 "}
            timeStamp={"pm"}
          />
          <Users
            userImage={"/user-image (15).jpg"}
            userName={"bou"}
            lastMassage={"i love you jaan"}
            lastTime={"10.07 "}
            timeStamp={"pm"}
          />
          <Users
            userImage={"/user-image (16).jpg"}
            userName={"bou"}
            lastMassage={"i love you jaan"}
            lastTime={"10.07 "}
            timeStamp={"pm"}
          />
          <Users
            userImage={"/user-image (17).jpg"}
            userName={"bou"}
            lastMassage={"i love you jaan"}
            lastTime={"10.07 "}
            timeStamp={"pm"}
          />
         
        </div>
      </section>
    </>
  );
};

export default ChatList;
