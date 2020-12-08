import React from 'react';

import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreIcon from '@material-ui/icons/MoreVert';

import './styles.css';

function ChatWindow() {
  return (
    <div>
      <div className="chatWindow">
        <div className="chatWindow--header">
          <div className="chatWindow--headerInfo">
            <img className="chatWindow-avatar" src="https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg" alt=""/>
            <div className="chatWindow-name">Nome da pessoa</div>
          </div>
          <div className="chatWindow--headerButtons">
            <div className="chatWindow--btn">
              <SearchIcon style={{ color: '#919191' }}/>
            </div>
            <div className="chatWindow--btn">
              <AttachFileIcon style={{ color: '#919191' }}/>
            </div> 
            <div className="chatWindow--btn">
              <MoreIcon style={{ color: '#919191' }}/>
            </div> 
          </div>
        </div>
        <div className="chatWindow--body">

        </div>
        <div className="chatWindow--footer">

        </div>
      </div>
    </div>
  );
}

export default ChatWindow;