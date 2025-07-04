import React from "react";
import { FaArrowRight, FaSmile } from "react-icons/fa";

const GroupChatBox = () => {
  return (
    <section className="h-dvh w-full input-massage-shadow">
      <div className="h-dvh flex flex-col w-full">
        {/* Header */}
        <div className="flex gap-2 items-center shadow-2xl w-full">
          <div className="m-4 w-17 rounded-full overflow-hidden border-2 border-primary outline-2 outline-base">
            <img src="/user-image (11).jpg" alt="user-image" />
          </div>
          <h2 className="text-[24px] text-brand font-headerFont font-light underline">
            office wife
          </h2>
        </div>

        {/* Chat Messages */}
        <div className="h-full overflow-y-scroll">
          <div className="flex flex-col gap-3 p-3">
            {/* Receiver Messages */}
            <p className="max-w-md pr-5 py-2 pl-2 shadow-2xl font-regularFont rounded-md rounded-br-3xl text-[18px] text-primary bg-base">
              Lorem, ipsum.
            </p>
            {/* Sender Messages */}
            <p className="ml-auto max-w-md pl-7 py-2 pr-2 shadow-2xl font-regularFont rounded-md rounded-bl-3xl text-[18px] text-primary bg-brand">
              Lorem, ipsum dolor.
            </p>

            <p className="max-w-md pr-5 py-2 pl-2 shadow-2xl font-regularFont rounded-md rounded-br-3xl text-[18px] text-primary bg-base">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="ml-auto max-w-md pl-7 py-2 pr-2 shadow-2xl font-regularFont rounded-md rounded-bl-3xl text-[18px] text-primary bg-brand">
              Lorem, ipsum dolor.
            </p>

            <p className="max-w-md pr-5 py-2 pl-2 shadow-2xl font-regularFont rounded-md rounded-br-3xl text-[18px] text-primary bg-base">
              Lorem, ipsum.
            </p>
            <p className="ml-auto max-w-md pl-7 py-2 pr-2 shadow-2xl font-regularFont rounded-md rounded-bl-3xl text-[18px] text-primary bg-brand">
              Lorem ipsum dolor, sit amet consectetur adipisicing.
            </p>

            <p className="max-w-md pr-5 py-2 pl-2 shadow-2xl font-regularFont rounded-md rounded-br-3xl text-[18px] text-primary bg-base">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <p className="ml-auto max-w-md pl-7 py-2 pr-2 shadow-2xl font-regularFont rounded-md rounded-bl-3xl text-[18px] text-primary bg-brand">
              Lorem, ipsum.
            </p>

            <p className="ml-auto max-w-md pl-7 py-2 pr-2 shadow-2xl font-regularFont rounded-md rounded-bl-3xl text-[18px] text-primary bg-brand">
              Lorem ipsum dolor sit amet.
            </p>

            <p className="max-w-md pr-5 py-2 pl-2 shadow-2xl font-regularFont rounded-md rounded-br-3xl text-[18px] text-primary bg-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestiae molestias deserunt asperiores, animi necessitatibus ab
              quia perferendis quidem!
            </p>

            <p className="max-w-md pr-5 py-2 pl-2 shadow-2xl font-regularFont rounded-md rounded-br-3xl text-[18px] text-primary bg-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus nobis totam iusto.
            </p>
            <p className="ml-auto max-w-md pl-7 py-2 pr-2 shadow-2xl font-regularFont rounded-md rounded-bl-3xl text-[18px] text-primary bg-brand">
              Lorem ipsum dolor sit amet.
            </p>

            <p className="max-w-md pr-5 py-2 pl-2 shadow-2xl font-regularFont rounded-md rounded-br-3xl text-[18px] text-primary bg-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
              ducimus omnis modi debitis pariatur similique dolor?
            </p>
            <p className="ml-auto max-w-md pl-7 py-2 pr-2 shadow-2xl font-regularFont rounded-md rounded-bl-3xl text-[18px] text-primary bg-brand">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>

            <p className="ml-auto max-w-md pl-7 py-2 pr-2 shadow-2xl font-regularFont rounded-md rounded-bl-3xl text-[18px] text-primary bg-brand">
              Lorem ipsum dolor sit amet consectetur.
            </p>

            <p className="max-w-md pr-5 py-2 pl-2 shadow-2xl font-regularFont rounded-md rounded-br-3xl text-[18px] text-primary bg-base">
              Lorem.
            </p>

            <p className="max-w-md pr-5 py-2 pl-2 shadow-2xl font-regularFont rounded-md rounded-br-3xl text-[18px] text-primary bg-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
              hic reprehenderit quos.
            </p>
            <p className="ml-auto max-w-md pl-7 py-2 pr-2 shadow-2xl font-regularFont rounded-md rounded-bl-3xl text-[18px] text-primary bg-brand">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Asperiores explicabo accusantium similique quas rem eveniet!
            </p>

            <p className="max-w-md pr-5 py-2 pl-2 shadow-2xl font-regularFont rounded-md rounded-br-3xl text-[18px] text-primary bg-base">
              Lorem ipsum dolor sit amet.
            </p>
            <p className="ml-auto max-w-md pl-7 py-2 pr-2 shadow-2xl font-regularFont rounded-md rounded-bl-3xl text-[18px] text-primary bg-brand">
              Lorem, ipsum.
            </p>
          </div>
        </div>

        {/* Input Section */}
        <div className="mt-auto input-massage-shadow border-t-2 border-brand">
          <div className="p-4 flex gap-5 md:flex-col lg:flex-row">
            <input
              type="text"
              placeholder="type your massage"
              className="placeholder:text-white text-[22px] w-full p-3 text-text rounded-full bg-primaryColor outline-0 input-shadow border-3 border-secondary focus:outline-3 focus:outline-brand"
            />
            <div className="flex gap-5">
              <button>
                <FaSmile className="text-[40px] text-brand border-2 border-primary outline-2 outline-base rounded-full cursor-pointer hover:text-base" />
              </button>
              <button>
                <FaArrowRight className="w-15 p-1 bg-brand text-[40px] text-primary border-2 border-primary outline-2 outline-base cursor-pointer rounded-full hover:bg-base" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupChatBox;

// export default GroupChatBox
