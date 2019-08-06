import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
//渲染组件
//在页面上渲染 “Hello, Sara”
function Welcome(props){
    return <h1>Hello,{props.name}</h1>;
}

//const element = <Welcome name="sara"  />

//创建一个可以多次渲染 Welcome 组件的 App 组件
//组件可以在其输出中引用其他组件
function App(){
    return(
        <div>
            <Welcome name="aa" />
            <Welcome name="bb" />
            <Welcome name="cc" />
        </div>
    );
}

ReactDOM.render(
//element, 
<App />,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
