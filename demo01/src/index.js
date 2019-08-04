//入口文件
import React from 'react'
import ReactDOM from 'react-dom'
//App组件，组件化开发
//import App from './App'
import Xiaojiejies from './Xiaojiejies'
//用React的语法把APP模块渲染（挂载）到了root ID上面
//JSX=JavaScript+xml,遇见<当html解析，{}当javascript解析
//React只对这一个<div>（root）,外边的其他DOM并不受任何影响
//ReactDOM.render(<Xiaojiejie />,document.getElementById('root'))
ReactDOM.render(<Xiaojiejies />,document.getElementById('root'))