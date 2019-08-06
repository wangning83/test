import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
//组件可以选择把它的 state 作为 props 向下传递到它的子组件中
function FormateDate(props){
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>
}

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }
//计时器更新
    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),1000
        );
    }

    componentWillUnmount(){
        clearInterval(this, this.timerID);
    }

    tick(){
        this.setState(
            {
                date: new Date()
            }
        );
    }

    render(){
        return(
            <div>
                <h1>Hi,guys!</h1>
                <FormateDate date={this.state.date} />
            </div>
        );
    }
}

function App(){
    return(
        <div>
            <Clock />
            <Clock />
            <Clock />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
