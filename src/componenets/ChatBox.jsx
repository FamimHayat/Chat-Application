import React from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaArrowLeft, FaArrowRight, FaSmile } from 'react-icons/fa'

const ChatBox = () => {
  return (
    <section className="h-dvh w-full">
      <div className="h-dvh flex flex-col w-full ">
        <div className="flex gap-2 items-center shadow-2xl w-full">
          <div className="m-4 w-17 rounded-full overflow-hidden border-2 border-primary outline-2 outline-base ">
            <img src="/user-image (11).jpg" alt="user-image" />
          </div>
          <h2 className="text-[24px] text-brand  font-headerFont font-light  underline">
            office wife
          </h2>
        </div>
        {/* <div>asd</div> */}
        <div className="mt-auto ">
          <div className="p-4 flex gap-5 ">
            <input
              type="text"
              placeholder="type your massage"
              className="placeholder:text-white text-[22px] w-full p-3 text-text rounded-full bg-primaryColor outline-0 input-shadow border-3 border-secondary focus:outline-3 focus:outline-brand "
            />
            <button >
              <FaSmile className="text-[40px] text-brand border-2   border-primary outline-2  outline-base  rounded-full cursor-pointer hover:text-base " />
            </button>
            <button >
              <FaArrowRight className="w-15 p-1 bg-brand text-[40px]  text-primary border-2   border-primary outline-2  outline-base  cursor-pointer rounded-full hover:text-base" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChatBox
