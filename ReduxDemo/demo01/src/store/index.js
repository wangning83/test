//整个项目的store文件，是仓库
//这样虽然已经建立好了仓库，但是这个仓库很混乱
//这时候就需要一个有管理能力的模块出现，这就是Reducers。
//这两个一定要一起创建出来，这样仓库才不会出现互怼现象。
import { createStore } from 'redux'  //引入createStore方法
import reducer from './reducer'

const store = createStore(reducer)          //创建数据存储仓库

export default store                //暴露出去