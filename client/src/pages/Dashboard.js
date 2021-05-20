import React from "react";
import SearchBar from '../components/Searchbar';
import Friendlist from '../components/Friendlist';
import ChatInput from '../components/ChatInput';

export default function Dashboard() {
  return (
    <div className="container">
    <div className="row">
        <div className='col-sm-12 col-md-4'>
            <SearchBar />
            <Friendlist />
        </div>
        <div className='col-sm-12 col-md-8'>
        <ChatInput /> 
        </div>
    </div>
    
    </div>
  );
}
