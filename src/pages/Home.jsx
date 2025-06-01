import React from 'react'

import ChatList from '../componenets/ChatList'
import ChatBox from '../componenets/ChatBox'

const Home = () => {
  return (
    <div className=" flex  flex-col md:flex-row bg-primary w-full">
      <ChatList />
      {/* <h2>select a chat</h2> */}
      <ChatBox />
    </div>
  );
}

export default Home
