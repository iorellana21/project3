
import React, { useState, useEffect } from "react";
import SearchBar from '../components/Searchbar';
import Friendlist from '../components/Friendlist';
import ChatInput from '../components/ChatInput';
/**
  * step 2 use useEffect to set state with that friends array when the component loads
 * step 3 pass the state as a prop to friend list component
 * step 4 use .map to loop throught the friends state array as a list 
 * 
 */
const friends = [
  
  {
    userName: "Ptums",

  },
  {
    userName: "Nes",
    
  },
  {
    userName: "Malcolm",
    
  },
  {
    userName: "Ivan",
    
  },
  {
    userName: "Jessica",
    
  },

]


export default function Dashboard() {
  const [friendList, setFriendList] = useState([]);
  useEffect(()=> {
    setFriendList(friends);

  })


  return (
    <div className="container">
    <div className="row">
        <div className='col-sm-12 col-md-4'>
            <SearchBar />
            <Friendlist list={friendList} />

        </div>
        <div className='col-sm-12 col-md-8'>
        <ChatInput /> 
        </div>
    </div>
    
    </div>
  );
}
