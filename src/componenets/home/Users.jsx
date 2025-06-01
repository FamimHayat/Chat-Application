import React from "react";
import { Link } from "react-router";

const Users = ({ userImage, userName, lastMassage, lastTime, timeStamp }) => {
  return (
    <Link to="/" className=" py-2 px-3 hover:bg-brand group">
      <div className="flex justify-between items-end">
        <div className="flex gap-8  justify-between">
          <div className="w-15 rounded-full overflow-hidden border-3 border-primary outline-2 outline-base">
            <img src={userImage} alt="" className="rounded-full" />
          </div>
          <div className="flex flex-col justify-between">
            <h2 className="text-[22px] text-text font-headerFont group-hover:text-primary">
              {userName}
            </h2>
            <p className="w-4xs text-sm underline text-brand font-regularFont  group-hover:text-primary lg:text-lg">
              {lastMassage}
            </p>
          </div>
        </div>
        <div className="text-[20px] font-headerFont text-text group-hover:text-primary">
          <p className="flex gap-2">
            <span> {lastTime}</span>
            <span className="text-[18px] font-regularFont font-medium">{timeStamp}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Users;
