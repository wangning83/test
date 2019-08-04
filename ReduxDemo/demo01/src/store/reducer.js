const defaultState = {
    //相当于你给Store里增加了两个新的数据
    inputValue:'Write Something',
    list:[
        '早8点开晨会，分配今天的工作任务',
        '早9点和项目经理开需求讨论会',
        '晚5：30对今日代码进行检查'
    ]

}             //默认数据
  
export default (state = defaultState,action)=>{   //方法函数
    return state    //state: 是整个项目中需要管理的数据信息
}