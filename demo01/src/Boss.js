//1、生成基本框架代码
import React, { Component } from 'react';
import {CSSTransition} from 'react-transition-group'

class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            //3、编写业务逻辑
            idShow:true

         }
         this.toToggole=this.toToggole.bind(this)
    }
    render() { 
        return ( 
            //2、写jsx代码
            <div>
                <CSSTransition
                in={this.state.isShow}  //用于判断动画是否出现的状态
                timeout={2000} //动画持续时间
                classNames="boss-text"
                // 加上unmountOnExit,加上这个的意思是在元素退场时，自动把DOM也删除
                unmountOnExit>
                <div>Boss级人物-孙悟空</div>
                </CSSTransition>
                {/* <div className={this.state.isShow?'show':'hide'}>Boss级人物-孙悟空</div> */}
                <div><button onClick={this.toToggole}>召唤Boss</button></div>
            </div>
         );
    }

    toToggole(){
        this.setState({
            //isShow:this.state.isShow ? false : true
            isShow:!this.state.isShow
        })
    }
}
 
export default Boss;