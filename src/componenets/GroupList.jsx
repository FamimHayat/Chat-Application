import React from "react";
import { FaSearch } from "react-icons/fa";
import UserList from "./layout/UserList"
import Users from "./home/Users"

const ChatList = () => {
  return (
    <>
      <section className="h-dvh md:w-4xl flex flex-col bg-primary border-r-2 border-r-brand rounded-xl">
        <div className="flex justify-between items-center mt-3">
          <h2 className="ml-4 text-3xl font-headerFont text-brand tracking-wide">
            chat with groups
          </h2>
          <div className="p-2">
            <button className="text-2xl font-semibold py-2 px-4 border-2 mr-3 cursor-pointer text-brand hover:text-primary hover:bg-text focus:bg-text focus:text-primary">
              create
            </button>
            <button className="text-2xl font-semibold py-2 px-4 border-2 mr-3 cursor-pointer text-brand hover:text-primary hover:bg-text focus:bg-text focus:text-primary">
              add
            </button>
          </div>
        </div>

        <div className="flex items-center w-full border-b-2 border-b-brand rounded-2xl">
          <div className="relative flex w-full p-3 gap-3">
            <input
              type="text"
              placeholder="user name"
              className="placeholder:text-white text-[22px] w-full px-3 py-2 text-text rounded-full bg-primaryColor outline-0 input-shadow border-3 border-secondary focus:outline-3 focus:outline-brand"
            />
            <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex justify-center items-center p-2 hover:bg-base border-2 border-base bg-primary rounded-full group cursor-pointer">
              <FaSearch className="text-[20px] text-base group-hover:text-primary" />
            </div>
          </div>
        </div>

        

        <div className="grid grid-cols-1 gap-4 py-2 my-3 overflow-y-scroll">
          {/* Static version of Users */}
          <div className="flex items-center px-4 py-2 gap-4">
           
          </div>
        </div>
      </section>
    </>
  );
};

export default ChatList;
