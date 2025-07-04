import React from "react";
import { CiSquarePlus } from "react-icons/ci";
import { FaPlusSquare } from "react-icons/fa";
import { useSelector } from "react-redux";

import { getDatabase, ref, set } from "firebase/database";

const Users = ({ friendData }) => {
  console.log(friendData);
  
  const db = getDatabase();


  // const reduxData = useSelector((state) => state.userInfo.userData);

  const handleAdd = () => {
    set(ref(db, "friendList/" + friendData.id), {
      username: friendData.username,
      email: friendData.email,
      profile_picture: friendData.profile_picture || "",
    });
  };

  return (
    <div className=" py-2 px-3 w-full   hover:bg-[#0000004c] ">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 sm:gap-4  items-center">
          <div className="scale-70 w-15 rounded-full overflow-hidden border-3 border-primary outline-2 outline-base sm:scale-100">
            <img src={friendData.profile_picture} alt="" className="rounded-full" />
          </div>

          <h2 className=" sm:text-[22px] text-text font-headerFont group-hover:text-primary">
            {friendData.username}
          </h2>
        </div>
        <div className="text-[20px] font-headerFont text-text hover:text-primary">
          <button
            onClick={handleAdd}
            className="flex gap-2 items-center transition-all py-2 px-3 hover:scale-110 bg-green-500 cursor-pointer"
          >
            add <FaPlusSquare />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Users;
