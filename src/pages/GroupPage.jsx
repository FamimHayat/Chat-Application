import React from 'react'
import GroupList from '../componenets/GroupList'
import GroupChatBox from '../componenets/GroupChatBox'

const GroupPage = () => {
  return (
    <div className=" flex  flex-col md:flex-row bg-primary w-full">
      <GroupList />
      {/* <h2>select a chat</h2> */}
      <GroupChatBox />
    </div>
  );
}

export default GroupPage;