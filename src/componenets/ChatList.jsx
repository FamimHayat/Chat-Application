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
            userImage={"/my-image.jpg"}
            userName={"bou"}
            lastMassage={"i love you jaan"}
            lastTime={"10.07 "}
          />
          <Users
            userImage={"/my-image.jpg"}
            userName={"bou"}
            lastMassage={"i love you jaan"}
            lastTime={"10.07 "}
          />
          <Users
            userImage={"/my-image.jpg"}
            userName={"bou"}
            lastMassage={"i love you jaan"}
            lastTime={"10.07 "}
          />
          <Users
            userImage={"/my-image.jpg"}
            userName={"bou"}
            lastMassage={"i love you jaan"}
            lastTime={"10.07 "}
          />
          <Users
            userImage={"/my-image.jpg"}
            userName={"bou"}
            lastMassage={"i love you jaan"}
            lastTime={"10.07 "}
          />
          <Users
            userImage={"/my-image.jpg"}
            userName={"bou"}
            lastMassage={"i love you jaan"}
            lastTime={"10.07 "}
          />
          <Users
            userImage={"/my-image.jpg"}
            userName={"bou"}
            lastMassage={"i love you jaan"}
            lastTime={"10.07 "}
          />
          <Users
            userImage={"/my-image.jpg"}
            userName={"bou"}
            lastMassage={"i love you jaan"}
            lastTime={"10.07 "}
          />
          <Users
            userImage={"/my-image.jpg"}
            userName={"bou"}
            lastMassage={"i love you jaan"}
            lastTime={"10.07 "}
          />
          <Users
            userImage={"/my-image.jpg"}
            userName={"bou"}
            lastMassage={"i love you jaan"}
            lastTime={"10.07 "}
          />
          <Users
            userImage={"/my-image.jpg"}
            userName={"bou"}
            lastMassage={"i love you jaan"}
            lastTime={"10.07 "}
          />
          <Users
            userImage={"/my-image.jpg"}
            userName={"bou"}
            lastMassage={"i love you jaan"}
            lastTime={"10.07 "}
          />
          <Users
            userImage={"/my-image.jpg"}
            userName={"bou"}
            lastMassage={"i love you jaan"}
            lastTime={"10.07 "}
          />
          <Users
            userImage={"/my-image.jpg"}
            userName={"bou"}
            lastMassage={"i love you jaan"}
            lastTime={"10.07 "}
          />
          <Users
            userImage={"/my-image.jpg"}
            userName={"bou"}
            lastMassage={"i love you jaan"}
            lastTime={"10.07 "}
          />
          <Users
            userImage={"/my-image.jpg"}
            userName={"bou"}
            lastMassage={"i love you jaan"}
            lastTime={"10.07 "}
          />
          <Users
            userImage={"/my-image.jpg"}
            userName={"bou"}
            lastMassage={"i love you jaan"}
            lastTime={"10.07 "}
          />
          <Users
            userImage={"/my-image.jpg"}
            userName={"bou"}
            lastMassage={"i love you jaan"}
            lastTime={"10.07 "}
          />
          <Users
            userImage={"/my-image.jpg"}
            userName={"bou"}
            lastMassage={"i love you jaan"}
            lastTime={"10.07 "}
          />
          <Users
            userImage={"/my-image.jpg"}
            userName={"bou"}
            lastMassage={"i love you jaan"}
            lastTime={"10.07 "}
          />
          <Users
            userImage={"/my-image.jpg"}
            userName={"bou"}
            lastMassage={"i love you jaan"}
            lastTime={"10.07 "}
          />
          <Users
            userImage={"/my-image.jpg"}
            userName={"bou"}
            lastMassage={"i love you jaan"}
            lastTime={"10.07 "}
          />
          <Users
            userImage={"/my-image.jpg"}
            userName={"bou"}
            lastMassage={"i love you jaan"}
            lastTime={"10.07 "}
          />
          <Users
            userImage={"/my-image.jpg"}
            userName={"bou"}
            lastMassage={"i love you jaan"}
            lastTime={"10.07 "}
          />
          <Users
            userImage={"/my-image.jpg"}
            userName={"bou"}
            lastMassage={"i love you jaan"}
            lastTime={"10.07 "}
          />
        </div>
      </section>
    </>
  );
};

export default ChatList;
