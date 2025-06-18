import React from "react";

const UserProfile = () => {
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
          <p className="text-xl font-headerFont  text-text">
            ANNA WILSON
          </p>
          <p className="text-sm font-regularFont font-semibold text-text">DEVELOPER</p>
        </div>

        {/* Contact Info */}
        <div className="w-full flex justify-center">
          <ul className="flex flex-col items-start gap-2 pb-3 text-xs font-semibold text-[#434955] border-b border-dotted border-stone-700 *:inline-flex *:gap-2 *:items-center *:border-b *:border-dotted *:border-stone-700 last:*:border-b-0">
            {[
              {
                icon: (
                  <svg
                    className="fill-stone-700 group-hover:fill-[#58b0e0]"
                    viewBox="0 0 24 24"
                    height={15}
                    width={15}
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M19.23 15.26l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52C8.63 4.41 7.78 3.65 6.76 3.65H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73a1.99 1.99 0 0 0-1.76-1.98z" />
                  </svg>
                ),
                text: "+123-458-784",
              },
              {
                icon: (
                  <svg
                    className="fill-stone-700 group-hover:fill-[#58b0e0]"
                    viewBox="0 0 32 32"
                    height={15}
                    width={15}
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M16,14.81,28.78,6.6A3,3,0,0,0,27,6H5a3,3,0,0,0-1.78.6Z" />
                    <path d="M16.54,16.84l-.17.08a1,1,0,0,1-.37,0l-.17-.08L2.1,8.26A3,3,0,0,0,2,9V23a3,3,0,0,0,3,3H27a3,3,0,0,0,3-3V9a3,3,0,0,0-.1-.74Z" />
                  </svg>
                ),
                text: "smkys@gmail.com",
              },
              {
                icon: (
                  <svg
                    className="fill-stone-700 group-hover:fill-[#58b0e0]"
                    viewBox="0 0 24 24"
                    height={15}
                    width={15}
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M22 12A10 10 0 1 0 12 2a10 10 0 0 0 10 10zm-2.07-1H17a12.91 12.91 0 0 0-2.33-6.54A8 8 0 0 1 19.93 11zM9.08 13H15a11.44 11.44 0 0 1-3 6.61A11 11 0 0 1 9.08 13z" />
                  </svg>
                ),
                text: "smkydevelopr.com",
              },
              {
                icon: (
                  <svg
                    className="fill-stone-700 group-hover:fill-[#58b0e0]"
                    viewBox="0 0 16 16"
                    height={15}
                    width={15}
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M8 0C5.2 0 3 2.2 3 5s4 11 5 11 5-8.2 5-11-2.2-5-5-5zm0 8C6.3 8 5 6.7 5 5s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" />
                  </svg>
                ),
                text: "456 Anytown, Near Anywhere, ST 47523",
              },
            ].map((item, i) => (
              <li key={i}>
                {item.icon}
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom hover bar */}
        <hr className="w-full h-3 bg-base transition-all duration-300 group-hover:h-5" />
      </div>
    </div>
  );
};

export default UserProfile;

// UserProfile;
