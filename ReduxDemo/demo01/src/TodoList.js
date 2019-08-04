import React, { Component } from 'react';
import 'antd/dist/antd.css'
import {Input, Button, List} from 'antd'
import store from './store/index'

// const data=[
//     '早8点开晨会，分配今天的工作任务',
//     '早9点和项目经理开需求讨论会',
//     '晚5：30对今日代码进行检查'
// ]

class TodoList extends Component {
    constructor(props) {
        super(props);
        //console.log(store.getState())
        this.state = store.getState();
    }
    render() { 
        return ( 
            <div style={{margin:'10px'}}>
                <div>
                    <Input placeholder={this.state.inputValue} style={{width:'250px',height:'30px',marginRight:'5px'}}/>
                    <Button type="primary">添加事件</Button>
                </div>
                <div style={{width:'300px',margin:'8px'}}>
                    <List
                        bordered   //边框
                        dataSource={this.state.list}   //前面写的数组
                        renderItem={item=>(<List.Item>{item}</List.Item>)}   //边框里的小项
                    />
                </div>
            </div>
         );
    }
}
 
export default TodoList;