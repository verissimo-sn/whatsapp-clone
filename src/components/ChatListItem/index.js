import React from 'react';

import './styles.css';

function ChatListItem({ onClick, active, itemData }) {
  return (
    <div className={`chatListItem ${active ? 'active' : ''}`} onClick={onClick}>
      <img className="chatListItem--avatar" src={itemData.avatar} alt=""/>
      <div className="chatListItem--lines">
        <div className="chatListItem--line">
          <div className="chatListItem--name">{itemData.name}</div>
          <div className="chatListItem--date">21:59</div>
        </div>
        <div className="chatListItem--line">
          <div className="chatListItem--lastMsg">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia 
              illo vero voluptatibus itaque vel nisi porro eos ab quod animi ipsam 
              repudiandae maxime doloremque omnis veritatis quasi, cupiditate qui tenetur.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatListItem;