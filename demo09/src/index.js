import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//使用ES6 class语法定义一个组件

class Toggle extends React.Component{

    constructor(props){
        super(props);
        this.state = {isToggleOn: true};

        //为了在回调中使用‘this’，这个绑定是必须的
        this.handleClick = this.handleClick.bind(this);
    }
//1、 构造器绑定this
    // handleClick(){
    //     this.setState(state => ({
    //         isToggleOn:!state.isToggleOn

    //     }));
    // }

//2、 class fields语法
    handleClick(){
        this.setState(state => ({
            isToggleOn:!state.isToggleOn
        
        }));
    }

    render(){
        return(
            <button onClick={(e) => this.handleClick(e)}>
            {this.state.isToggleOn?'ON':'OFF'}
            </button>
            // <button onClick={this.handleClick} >
            //     {this.state.isToggleOn?'ON':'OFF'}
            // </button>
        );
    }
}

ReactDOM.render(<Toggle />, document.getElementById('root'));

