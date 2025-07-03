import React, { useState } from "react";
import { CiSaveUp1 } from "react-icons/ci";
import { FaPen, FaSave } from "react-icons/fa";
import { FaSquarePollVertical } from "react-icons/fa6";

const UserProfile = () => {
  const [edit, setEdit] = useState(false);

  return (
    <div className="w-full flex justify-center bg-secondary ">
      <div className="w-[300px] sm:w-[350px] h-fit py-15 my-auto rounded-lg overflow-hidden z-[100] bg-primary  signIn-shadow relative cursor-pointer snap-start shrink-0 bg- flex flex-col items-center justify-center gap-3 transition-all duration-300 group">
        {/* Avatar */}
        <div className="w-full pt-5 flex flex-col items-center justify-center gap-1">
          <div className="relative w-full flex items-center justify-center">
            {/* Top and bottom border lines on hover */}
            <div className="absolute top-4 w-full h-[6px] bg-text transition-all duration-300 delay-300 group-hover:w-[1%] group-hover:delay-0" />
            <div className="absolute bottom-4 w-full h-[6px] bg-text transition-all duration-300 delay-300 group-hover:w-[1%] group-hover:delay-0" />

            {/* Avatar Circle */}
            <div className="relative z-10 h-[80px] w-[80px] rounded-full border-2 border-base hover:border-[#58b0e0] transition-all overflow-hidden">
              <img
                src="/my-image.jpg"
                alt="User"
                className="h-full w-full object-cover z-20"
              />
            </div>

            {/* Hover effect circle behind image */}
            <div className="absolute bg-base border-4 border-primary z-0 w-[60%] h-[60%] rounded-full transition-all duration-700 delay-700 group-hover:w-[1%] group-hover:h-[1%] group-hover:delay-0" />
          </div>
        </div>

        {/* Name & Title */}
        <div className="text-center leading-4">
          <div className="flex gap-7">
            <p className="text-3xl font-headerFont my-4 text-text">
             
            </p>
            <button onClick={()=> setEdit(true)}>
              <FaPen className="text-3xl text-white p-1 cursor-pointer hover:bg-blue-600  active:bg-transparent" />
            </button>
          </div>
        </div>

        {edit && (
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="type your massage"
              className="placeholder:text-[#c6c6c6c9] text-[22px] w-full px-3 py-2 text-text rounded-full bg-primaryColor outline-0 input-shadow border-3 border-secondary focus:outline-3 focus:outline-brand "
            />
            <button onClick={()=> setEdit(false)}>
              <CiSaveUp1 className="text-5xl text-white p-1 cursor-pointer hover:bg-blue-600  active:bg-transparent" />
            </button>
          </div>
        )}
        {/* Bottom hover bar */}
        <hr className="w-full h-3 bg-base transition-all duration-300 group-hover:h-5" />
      </div>
    </div>
  );
};

export default UserProfile;

// UserProfile;
