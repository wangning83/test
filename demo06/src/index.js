import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//函数组件转换为class组件
class Clock extends React.Component{
    //this.state赋值,将 props 传递到父类的构造函数中
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    //将生命周期方法添加到 Class 中
    //设置计时器并每秒更新它
    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date:new Date()
        });
    }


    render(){
        return(
            <div>
                <h1>Hello, Kitty!</h1>
                {/* <h2>It is {this.props.date.toLocaleTimeString()}.</h2> */}
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

    ReactDOM.render(
    // <Clock date={new Date()} />, 
    <Clock />,
    document.getElementById('root')
    );

