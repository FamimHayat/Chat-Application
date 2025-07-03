import React, { useState } from "react";
import Users from "./home/Users";
import { FaSearch } from "react-icons/fa";

import UserList from "./layout/UserList"

const ChatList = () => {
  const [addList, setAddList] = useState(false);

  return (
    <>
      <section className=" h-dvh md:w-4xl flex flex-col  bg-primary  border-r-2 border-r-brand rounded-xl">
        <div className="flex items-center w-full border-b-2 border-b-brand rounded-2xl">
          <div className="relative flex  w-full   p-3 gap-3">
            <input
              type="text"
              placeholder="user name"
              className="placeholder:text-white text-[22px] w-full p-3 text-text rounded-full bg-primaryColor outline-0 input-shadow border-3 border-secondary focus:outline-3 focus:outline-brand"
            />
            <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex justify-center items-center p-2 hover:bg-base border-2 border-base bg-primary rounded-full group cursor-pointer">
              <FaSearch className="text-[20px] text-base group-hover:text-primary" />
            </div>
          </div>
          <div className="p-2">
            <button
              onClick={() => setAddList(true)}
              className="text-2xl font-semibold py-2 px-4 border-2  mr-3 cursor-pointer  text-brand hover:text-primary hover:bg-text"
            >
              add
            </button>
          </div>
        </div>

        {addList && <UserList handleClose={() => setAddList(false)} />}

      

        <div className="grid grid-cols-1 gap-4  py-2 my-3 overflow-y-scroll">
          <Users
            userImage={"/user-image (1).jpg"}
            userName={"bou"}
            lastMassage={"i love you jaan"}
            lastTime={"10.07 "}
            timeStamp={"am"}
          />
          <Users
            userImage={"/user-image (2).jpg"}
            userName={"side chick"}
            lastMassage={"babu khaisaw..?"}
            lastTime={"10.07 "}
            timeStamp={"pm"}
          />
          <Users
            userImage={"/user-image (3).jpg"}
            userName={"best friend"}
            lastMassage={"koi asos..?"}
            lastTime={"10.07 "}
            timeStamp={"pm"}
          />
          <Users
            userImage={"/user-image (4).jpg"}
            userName={"normal friend"}
            lastMassage={"kire mama"}
            lastTime={"10.07 "}
            timeStamp={"pm"}
          />
          <Users
            userImage={"/user-image (5).jpg"}
            userName={"teacher"}
            lastMassage={"dont forget your assignment"}
            lastTime={"10.07 "}
            timeStamp={"pm"}
          />
          <Users
            userImage={"/user-image (6).jpg"}
            userName={"bou 3"}
            lastMassage={"i love you baby"}
            lastTime={"10.07 "}
            timeStamp={"pm"}
          />
          <Users
            userImage={"/user-image (7).jpg"}
            userName={"team leader"}
            lastMassage={"progress status...?"}
            lastTime={"10.07 "}
            timeStamp={"pm"}
          />
          <Users
            userImage={"/user-image (8).jpg"}
            userName={"class mate"}
            lastMassage={"free tonight..?"}
            lastTime={"10.07 "}
            timeStamp={"pm"}
          />
          <Users
            userImage={"/user-image (9).jpg"}
            userName={"bou 4"}
            lastMassage={"when you gonna come home.."}
            lastTime={"10.07 "}
            timeStamp={"pm"}
          />
          <Users
            userImage={"/user-image (10).jpg"}
            userName={"side chick 2"}
            lastMassage={"baby dinner outside"}
            lastTime={"10.07 "}
            timeStamp={"pm"}
          />
          <Users
            userImage={"/user-image (11).jpg"}
            userName={"office wife..?"}
            lastMassage={"where are the report papers.?"}
            lastTime={"10.07 "}
            timeStamp={"pm"}
          />
          <Users
            userImage={"/user-image (12).jpg"}
            userName={"friend"}
            lastMassage={"hi, free tonight..?"}
            lastTime={"10.07 "}
            timeStamp={"pm"}
          />
          <Users
            userImage={"/user-image (13).jpg"}
            userName={"sister in law"}
            lastMassage={"eid shopping er jonno taka lagbe.."}
            lastTime={"10.07 "}
            timeStamp={"pm"}
          />
          <Users
            userImage={"/user-image (14).jpg"}
            userName={"client"}
            lastMassage={"project ready..?"}
            lastTime={"10.07 "}
            timeStamp={"pm"}
          />
          <Users
            userImage={"/user-image (15).jpg"}
            userName={"pervert friend"}
            lastMassage={"party tonight..?"}
            lastTime={"10.00"}
            timeStamp={"pm"}
          />
          <Users
            userImage={"/user-image (16).jpg"}
            userName={"co-worker"}
            lastMassage={"where are the reports sir"}
            lastTime={"10.07 "}
            timeStamp={"pm"}
          />
          <Users
            userImage={"/user-image (17).jpg"}
            userName={"little brother"}
            lastMassage={"when you gonna pay my tution fees ..?"}
            lastTime={"10.07 "}
            timeStamp={"pm"}
          />
        </div>
      </section>
    </>
  );
};

export default ChatList;
