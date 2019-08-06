import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// const number = [1, 2, 3, 4, 5];
// const listItem = number.map(
//     (number) => <li>{number}</li>
// );

// ReactDOM.render(
// <ul>{listItem}</ul>,
//  document.getElementById('root'));


//基础列表组件
// function NumberList(props){
//     const numbers = props.numbers;
//     const listItems = numbers.map(
//         (number) =><li key={number.toString()}>{number}</li>
//     );
//     return(
//         <ul>{listItems}</ul>
//     );
// }

// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//     <NumberList numbers={numbers} />,
//     document.getElementById('root')

// );


//用 key 提取组件
// function ListItem(props){
//     const value = props.value;
//     return(
//         <li>{value}</li>
//     );
// }
// function NumberList(props){
//     const numbers = props.numbers;
//     const listItems = numbers.map(
//         (number) => <ListItem key={number.toString()} value={number} />
//     );
//     return(
//         <ul>{listItems}</ul>
//     );

// }
//  const numbers = [1, 2, 3, 4, 5];
//  ReactDOM.render(
//      <NumberList numbers={numbers} />,
//      document.getElementById('root')

//  );



//key 只是在兄弟节点之间必须唯一
//当生成两个不同的数组时可以使用相同的 key 值
// function Blog(props){
//     const sidebar =(
//         <ul>
//             {props.posts.map((post) =>
//             <li key={post.id}>{post.title}</li>
//             )}
//         </ul>
//     );

//     const content = props.posts.map(
//         (post) =>
//         <div key={post.id}>
//             <h3>{post.title}</h3>
//             <p>{post.content}</p>
//         </div>
//         );

//     return(
//         <div>
//             {sidebar}
//             <hr />
//             {content}
//         </div>
//     );    
// }

// const posts = [
//     {id: 1, title: 'Hello World!', content: 'Welcome to learning React!'},
//     {id: 2, title: 'Installation', content: 'You can install react from npm.'}
// ];

// ReactDOM.render(
//     <Blog posts={posts} />,
//     document.getElementById('root')

// );


//在 JSX 中嵌入 map()
//JSX 允许在大括号中嵌入任何表达式，所以我们可以内联 map() 返回的结果
function ListItem(props){
    const value = props.value;
    return <li>{value}</li>
}
function NumberList(props){
    const numbers = props.numbers;
    return(
        <ul>
            {numbers.map(
                (number) => 
                        <ListItem key={number.toString()} value={number} />
                )}
        </ul>
    );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('root')
);