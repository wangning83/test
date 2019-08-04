//组件的拆分
//子组件
import React, { Component } from 'react';
//PropTypes校验传递值
//引入后，就可以在组件的下方进行引用了，需要注意的是子组件的最下面（不是类里边）
import PropTypes from 'prop-types'

class XiaojiejieItem extends Component {

    constructor(props){
        super(props)
        this.handClick=this.handClick.bind(this)
    }
//组件第一次存在于dom中，函数不会被执行
//如果已存在于dom中，函数才会被执行
    /*componentWillReceiveProps(){
        console.log("子组件接收了props，这时候函数就可以被执行了")
    }

    componentWillUnmount(){
        console.log("child- componentWillUnmount")
    }*/

    state = {  }
    //生命周期改善程序性能
    shouldComponentUpdate(nextProps,nextStates){
        if(nextProps.content!==this.props.content){
            return true
        }else{
            return false
        }
    }
    render() { 
        console.log("child-render")
        return ( 
            //<li>小姐姐</li>
            //子组件向父组件传递数据，但实际上react中子组件不允许直接干预父组件
            //this绑定采用构造方法，对性能优化有作用
            //<li onClick={this.handClick}>{this.props.content}</li>
            //<li onClick={this.handClick.bind(this)}>{this.props.content}</li>
            //必传值的校验
            //1、这时候代码是不会报错的，我们传不传name无所谓
            //<li onClick={this.handClick}>
            //{this.props.name}帮你-{this.props.content}
            //</li>
            //2、在父组件赋值并传递过来
            <li onClick={this.handClick}>
            {this.props.name}帮你-{this.props.content}
            </li>
            );
    }

    handClick(){
       //this.props.list=this.props.list,错误，只能使用这个值（只读），而不能修改这个值
       // console.log(this.props.index)
       this.props.deleteItem(this.props.index)
    }
}

//校验传递值
XiaojiejieItem.propTypes={
    //表示name值必须传递且必须是string类型
    //name:PropTypes.string.isRequired,
    content:PropTypes.string,
    index:PropTypes.number,
    deleteItem:PropTypes.func
}

//使用默认值defaultProps
XiaojiejieItem.defaultProps={
    name:"小花"
}
export default XiaojiejieItem;