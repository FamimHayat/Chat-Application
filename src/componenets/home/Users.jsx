import React from "react";
import { Link } from "react-router";

const Users = ({ userImage, userName, lastMassage, lastTime }) => {
  return (
    <Link to="/" className="w-full py-2 px-3 hover:bg-base ">
      <div className="flex justify-between items-end">
        <div className="flex gap-8  justify-between">
          <div className="w-15 rounded-full overflow-hidden border-3 border-primary outline-2 outline-base">
            <img src={userImage} alt="" className="rounded-full" />
          </div>
          <div className="flex flex-col justify-between">
            <h2 className="text-[22px] text-text font-headerFont">
              {userName}
            </h2>
            <p className="text-[18px] underline text-brand font-regularFont hover:text-base">
              {lastMassage}
            </p>
          </div>
        </div>
        <div className="text-[20px] font-headerFont text-text">
          <p>{lastTime}pm</p>
        </div>
      </div>
    </Link>
  );
};

export default Users;
