import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
//事件处理
function ActionLink(){
    function handleClick(e){
//2、不能通过返回 false 的方式阻止默认行为,必须显式的使用 preventDefault
        e.preventDefault();
        console.log('The link was clicked.');
    }
    return(
        //1、 区别于传统的HTML,onclick="activateLasers()">
        <a href="https://www.baidu.com/" onClick={handleClick}>Click me!</a>
    );
}


ReactDOM.render(<ActionLink />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
