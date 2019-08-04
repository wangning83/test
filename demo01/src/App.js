//App组件
import React, {Component} from 'react'//ES6写法，解构赋值写法
/*相当于
import React from 'react' 
const Component = React.Componet
*/


//组建名称必须以大写字母开头（App）
class App extends Component{
    render(){
        return(
            //JSX
            //<div>Hello World</div>
            /*
            <ul class="my-list">
                <li>JsPang</li>
                <li>I love React</li>
            </ul>
            */
            /*若将上述JAX语句改为javascript语句
            var child1 = React.createElement('li',null,'JsPang');
            var child2 = React.createElement('li',null,'I love React');
            var root = React.createElement('ul',{className: 'my-list'},child1,child2);
            */

            //JSX中使用三元运算符
            <ul class="my-list">
            <li>{false?'jsPang':'技术'}</li>
            <li>I love React</li>
            </ul>


        )
    }
}
//暴露类App
export default App