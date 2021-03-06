
import React, { useState, useEffect } from "react";
import SearchBar from '../components/Searchbar';
import Friendlist from '../components/Friendlist';
import ChatInput from '../components/ChatInput';
import { Link, useLocation } from 'react-router-dom';
import './dashboard.css';

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

  }, [])
  const location = useLocation();


  return (
    <div className="container dashboard-bg">
    <div className="row">
        <div className='col-sm-12 col-md-4 mr-0 pr-0 pl-3'>
            <SearchBar />
            <Friendlist list={friendList} />
        </div>
        <div className='col-sm-12 col-md-8 ml-0 pl-0'>
        <ChatInput /> 
        </div>
    </div>
    
    </div>
  );
}
