import React, { useState, useEffect } from 'react';

import ChatListItem from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

import './App.css';

function App() {

  const [chatList, setChatList] = useState([{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]);

  return (
    <div className="app-window">
      <div className="sidebar">
        <header>
          <img className="header--avatar" src="https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg" alt="Wpp Clone"/>
          <div className="header--buttons">
            <div className="header--button">
              <DonutLargeIcon style={{ color: '#919191' }}/>
            </div>
            <div className="header--button">
              <ChatIcon style={{ color: '#919191' }}/>
            </div>
            <div className="header--button">
              <MoreVertIcon style={{ color: '#919191' }}/>
            </div>
          </div>
        </header>
        <div className="search"> 
          <div className="search--input">
            <SearchIcon fontSize="small" style={{ color: '#919191' }}/>
            <input 
              type="search" 
              name="" id="" 
              placeholder="Procurar ou começar uma nova conversa"
            />
          </div>
        </div>
        <div className="chatList">
          {chatList.map((item, key) => {
            return (
              <ChatListItem key={key}/>
            )
          })}
        </div>
      </div>
      <div className="contentarea">
        <ChatIntro />
      </div>
    </div>
  );
}

export default App;
