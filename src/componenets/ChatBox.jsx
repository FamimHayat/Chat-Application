import React from 'react'

const ChatBox = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col w-full " >
        <div className='flex gap-2 items-center shadow-2xl w-full'>
          <div className="m-4 w-17 rounded-full overflow-hidden border-2 border-primary outline-2 outline-base ">
            <img src="/user-image (11).jpg" alt="user-image" />
          </div>
          <h2 className='text-[24px] text-brand  font-headerFont font-light  underline'>office wife</h2>
        </div>
      </div>
    </section>
  );
}

export default ChatBox
