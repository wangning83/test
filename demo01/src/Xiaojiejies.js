import React,{Component,Fragment} from 'react'
import './style.css'
import XiaojiejieItem from './XiaojiejieItem'

import axios from 'axios'
import Boss from './Boss'
import {CSSTransition, TransitionGroup} from 'react-transition-group'

class Xiaojiejies extends Component{

    //js的构造函数
    constructor(props){
        //调用父类的构造函数，固定写法
        super(props)
        this.state={
            inputValue:'', //input中的值
            //列表数据化
            list:['刷墙','洗碗'] //服务列表
            //list:[]
        }
        this.deleteItem=this.deleteItem.bind(this)
    }

   componentDidMount(){
       //学习了Axios的简单用法，并用最简单的方式，请求到了一个掘金网站的数据接口
    //axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
    //开发中都是前后端分离的，我们也需要自己模拟数据，通常把自己模拟数据这个过程就叫做mock
    axios.get('https://www.easy-mock.com/mock/5d4131d4d9fb5b5023d47f0a/ReactDemo01/Xiaojiejie')
        .then((res)=>{
            console.log('axios 获取数据成功:'+JSON.stringify(res)) 
            this.setState({
                //两层data
                list:res.data.data
            })
        })
        .catch((error)=>{console.log('axios 获取数据失败'+error)})
   }

    render(){
        return(
           
            <Fragment>
                <div>
                    {/* JSX注释步骤：
                    先写注释内容，再按住ctrl+/ */}
                    {/* 事件绑定 */}
                    {/* className若写成class运行时会出现警告 */}
                    
                    <label htmlFor="jspang">加入服务：</label>{/* 想点击“加入服务”直接可以激活文本框，方便输入 */}
                    <input 
                    id="jspang" 
                    className="input" 
                    value={this.state.inputValue} 
                    onChange={this.inputChange.bind(this)}
                    //使用ref解决语义化模糊的代码问题
                    ref={(input)=>(this.input=input)}
                    ></input>
                    <button onClick={this.addList.bind(this)}>增加</button>
                </div>
               {/* 用ref绑定取得要服务的数量 */}
                <ul ref={(ul)=>(this.ul=ul)}>
                <TransitionGroup>{
                    this.state.list.map((item,index)=>{
                        return (
                            <CSSTransition
                                timeout={1000}
                                classNames='boss-text'
                                unmountOnExit
                                appear={true}
                                key={index+item}  
                            >
                                <XiaojiejieItem 
                                content={item}
                                index={index}
                                deleteItem={this.deleteItem.bind(this)}
                                />
                            </CSSTransition>

                           
                        )
                    })
                }
                </TransitionGroup>
                </ul>
                <Boss/>
            </Fragment>
        )
    }

    inputChange(e){
        /* //控制台可以打印出输入的值
            console.log(e.target.value);
            //直接改变inputValue的值
            //产生错误，原因：
            //1、this指向不对,需重新用bind设置一下指向(ES6的语法)
            //2、React中改变值需要使用this.setState方法
            //setState是一个异步函数
            this.state.inputValue=e.target.value;
            */
        this.setState({
            //ref
            //inputValue:e.target.value改为
            inputValue:this.input.value

        })
   }   
   

   //函数式编程让我们的代码更清晰，每个功能都是一个函数。
  //函数式编程为我们的代码测试代理了极大的方便，更容易实现前端自动化测试。
   addList(e){
       this.setState({
           //...扩展运算符（ES6新语法），相当于list:['刷墙','洗碗'，this.state.list,this.state.inputValue]
           list:[...this.state.list,this.state.inputValue],
           inputValue:''
       },()=>{
           console.log(this.ul.querySelectorAll('li').length)
       })
       //ref的坑，数量会少一个
      // console.log(this.ul.querySelectorAll('li').length)
   }

   deleteItem(index){
       /*
       //控制台已经可以显示要删除的数据的下标
       console.log(index)
       */
      //React是禁止直接操作state
      let list = this.state.list;
      list.splice(index,1);
      this.setState({
          //用setState更新数据
          list:list
      })

   }
}
export default Xiaojiejies