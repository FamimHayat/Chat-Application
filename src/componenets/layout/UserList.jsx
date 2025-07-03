import React, { useEffect, useState } from "react";
import { PiArrowBendDoubleUpLeft } from "react-icons/pi";
import { getDatabase, ref, onValue } from "firebase/database";
import Users from "../home/Users";
import { useSelector } from "react-redux"

const UserList = ({ handleClose }) => {
  const db = getDatabase();
  const [userList, setUserList] = useState([]);
  console.log(userList);
  
  const reduxData = useSelector((state) => state.userInfo.userData);

  useEffect(() => {
    onValue(ref(db, "usersList/"), (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        if (item.key !== reduxData?.uid){
          arr.push({ ...item.val(), id: item.key });
        }
      });
      setUserList(arr);
    });
  }, []);

  return (
    <div className="absolute z-20 bg-[#eae4d5cb] w-full h-dvh">
      <div className="absolute top-50 left-150 bg-primary w-100 h-150 p-6 border-4 border-base signIn-shadow input-shadow rounded-3xl">
        <div className="flex gap-8 items-center border-b-2 pb-3 border-text">
          <button
            onClick={handleClose}
            className="text-xl font-headerFont p-1 flex items-center gap-1 cursor-pointer border-2 border-primary outline-2 outline-base rounded-full bg-brand hover:bg-text text-primary"
          >
            back
            <PiArrowBendDoubleUpLeft />
          </button>
          <h2 className="text-4xl font-headerFont text-brand">users</h2>
        </div>
        <div className="mt-2 h-[calc(52dvh)] overflow-hidden overflow-y-scroll">
          {userList.map((item) => (
            <Users
              key={item.id}
              userImage={item.profile_picture}
              userName={item.username}
            />
          ))}
       
        
        </div>
      </div>
    </div>
  );
};

export default UserList;
