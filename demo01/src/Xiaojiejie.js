//父组件
import React,{Component,Fragment} from 'react'
import './style.css'
import XiaojiejieItem from './XiaojiejieItem'
//axios数据请求
import axios from 'axios'
import Boss from './Boss'

class Xiaojiejie extends Component{

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

    /*
    componentWillMount(){
        console.log("组件即将要挂载到页面上的时刻")
    }

    componentDidMount(){
        console.log("组件挂载完成时刻")
    }

    shouldComponentUpdate(){
        console.log("1、组件发生改变之前执行")
        return true
    }

    componentWillUpdate(){
        console.log("2、组件更新前，shouldComponentUpdate函数执行之后")
    }

    componentDidUpdate(){
        console.log("4、组件更新之后执行")
    }
    */

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
        //console.log("3、组件挂载中")
        return(
            //组件外层包裹原则,若没有最外层的div显示不出内容
            //所以我们在写一个组件的时候，组件的最外层都需要有一个包裹
            //但是你的布局就偏不需要这个最外层的标签怎么办?
            //比如我们在作Flex布局的时候,外层还真的不能有包裹元素
            //引入fragment
            //value={this.state.inputValue}数据绑定
            //onChange={this.onChange}进行绑定事件
            //<div>
            /*<Fragment>
                <div>
                    <input value={this.state.inputValue} onChange={this.inputChange.bind(this)}></input>
                    <button>增加</button>
                </div>
                <ul>
                    <li>垃圾</li>
                    <li>扫地</li>
                </ul>
            </Fragment>
            */
            //</div>

            //实现服务数据的添加
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
                    {
                        //如果要删除一个东西，就要得到数组里的一个编号，这里指下标
                        this.state.list.map((item,index)=>{
                           return(
                               //父组件向子组件传值,父组件向子组件传递内容，靠属性的形式传递
                                   <XiaojiejieItem  
                                   key={index+item}
                                   content={item}
                                   index={index}
                                   //将父组件的deleteItem的方法传递给子组件
                                   deleteItem={this.deleteItem}
                                   //单项数据流，就是说若父组件将数据传递给子组件，子组件不能对传递过去的数据进行直接修改，可以传递方法利用方法修改数据值
                                   list={this.state.list}
                                   //name='小明'
                                   />
                            
                            //<li 
                            //key={index+item}
                           // onClick={this.deleteItem.bind(this,index)}
                            /* 在文本框里输入一个<h1>标签，并进行渲染 */
                            //dangerouslySetInnerHTML={{__html:item}}

                            //>
                            //{/* {item} */}
                           // </li>
                            )
                        })
                    }
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
export default Xiaojiejie