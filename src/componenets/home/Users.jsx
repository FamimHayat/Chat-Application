import React, { useEffect, useState } from "react";
import { CiSquarePlus } from "react-icons/ci";
import { FaPlusSquare } from "react-icons/fa";
import { useSelector } from "react-redux";

import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { IoCheckmarkDoneOutline } from "react-icons/io5"

const Users = ({ friendData }) => {
  const db = getDatabase();

  const reduxData = useSelector((state) => state.userInfo.userData);
  const [friendList, setFriendList] = useState([]);

  const handleAdd = () => {
    set(push(ref(db, "friendList/")), {
      //creatorData
      creatorUserName: reduxData.displayName,
      creatorEmail: reduxData.email,
      creatorID: reduxData.uid,
      creatorPhotoURL: reduxData.photoURL,
      //participantData
      participantUserName: friendData.username,
      participantEmail: friendData.email,
      participantID: friendData.id,
      participantPhotoURL: friendData.profile_picture,
    });
  };

  useEffect(() => {
    const starCountRef = ref(db, "posts/");
    onValue(ref(db, "friendList/"), (snapshot) => {
      let arr = [];
      snapshot.forEach((items) => {
        arr.push(items.val().creatorID + items.val().participantID);
      });
      setFriendList(arr);
    });
  }, []);

  return (
    <div className=" py-2 px-3 w-full   hover:bg-[#0000004c] ">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 sm:gap-4  items-center">
          <div className="scale-70 w-15 rounded-full overflow-hidden border-3 border-primary outline-2 outline-base sm:scale-100">
            <img
              src={friendData.profile_picture}
              alt=""
              className="rounded-full"
            />
          </div>

          <h2 className=" sm:text-[22px] text-text font-headerFont group-hover:text-primary">
            {friendData.username}
          </h2>
        </div>
        <div className="text-[20px] font-headerFont text-text hover:text-primary">
          {friendList.includes(friendData.id + reduxData.uid) ||
          friendList.includes(reduxData.uid + friendData.id) ? (
            <p className="text-lg text-green-400 py-2 px-3 border-2 border-green-400 flex gap-1 items-center ">
              friends 
              <IoCheckmarkDoneOutline className="text-2xl"/>
            </p>
          ) : (
            <button
              onClick={handleAdd}
              className="flex gap-2 items-center transition-all py-2 px-3 hover:scale-110 bg-green-500 cursor-pointer"
            >
              add <FaPlusSquare />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Users;
