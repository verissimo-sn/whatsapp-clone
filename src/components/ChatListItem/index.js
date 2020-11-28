import React from 'react';

import './styles.css';

function ChatListItem() {
  return (
    <div className="chatListItem">
      <img className="chatListItem--avatar" src="https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg" alt=""/>
      <div className="chatListItem--lines">
        <div className="chatListItem--line">
          <div className="chatListItem--name">Veríssimo Santos</div>
          <div className="chatListItem--date">21:59</div>
        </div>
        <div className="chatListItem--line">
          <div className="chatListItem--lastMsg">
            <p>Ôlá, tudo bem ?</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatListItem;