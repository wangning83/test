import React from 'react';
//import logo from './logo.svg';
import './App.css';
//创建不同的组件来封装各种你需要的行为。
//然后，依据应用的不同状态，你可以只渲染对应状态下的部分内容
function UserGreeting(props){
  return <h1>Welcom back!</h1>
}
function GuestGreeting(props){
  return <h1>Please sign up!</h1>
}

function App(props) {
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn){
    return <UserGreeting />;
  }else{
    return <GuestGreeting />;
  }
  
}

export default App;
