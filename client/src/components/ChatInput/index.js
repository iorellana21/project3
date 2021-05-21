import React from 'react';
import './index.scss';



export default function ChatInput (){
    return (
      <div className="container">
      <div className="row">
        <div className="col msg-window-container">
          <div className="card" id="msgWindow">
            <div className="card-header"><span className="card-title">Chat with Customer Support Agent</span></div>
            <div className="card-body" id="msgs">
              <div className="msg to">Hello! How can I assist you today?</div>
            </div>
            <div className="card-footer">
              <div className="input-group" id="msgForm" data-sender="me">
                <input className="form-control" type="text" placeholder="Type message and hit [Enter] to send."/>
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="button">Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
};