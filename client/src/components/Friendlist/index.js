import React from 'react';
import './index.scss';



export default function Friendlist ({list}){
    console.log(list);
    
    return (
        <div className="row align-items-center friend-list">
                        <ul>
                            {list.map((friend) => (<li key={friend.userName}>{friend.userName}</li>))}  

                        </ul>
                    </div>
        
    )
};