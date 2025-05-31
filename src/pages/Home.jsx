import React from 'react'

import ChatList from '../componenets/ChatList'
import ChatBox from '../componenets/ChatBox'

const Home = () => {
  return (
  
      <div className='bg-primary w-full'>
        <ChatList  />
        <ChatBox/>
      </div>
   
  );
}

export default Home
