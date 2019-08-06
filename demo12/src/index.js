import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



//&&与运算符
//如果条件是 true，&& 右侧的元素就会被渲染
//如果是 false，React 会忽略并跳过它
function MailBox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
        <h1>Hello!</h1>
        {(unreadMessages.length > 0) &&
          <h2>
            You have {unreadMessages.length} unread messages.
          </h2>
        }
      </div>
      
    );
  }
  

const messages = ['React', 'Re: React', 'Re:Re: React'];

ReactDOM.render(
<MailBox unreadMessags={messages} />, 
document.getElementById('root'));


