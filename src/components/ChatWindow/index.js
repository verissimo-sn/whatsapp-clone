import React from 'react';

import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';

import './styles.css';

function ChatWindow() {
  return (
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
        <div className="chatWindow--pre">
          <div className="chatWindow--btn">
            <InsertEmoticonIcon style={{ color: '#919191' }}/>
          </div>
        </div>
        <div className="chatWindow--inputarea">
          <input className="chatWindow--input" type="text" placeholder="Digite uma mensagem"/>
        </div>
        <div className="chatWindow--pos">
          <div className="chatWindow--btn">
            <SendIcon style={{ color: '#919191' }}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatWindow;