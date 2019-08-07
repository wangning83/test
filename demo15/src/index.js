import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//受控组件,表单
// class NameForm extends React.Component{
//     constructor(props){
//         super(props);
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.state = {value: '呼呼'}
//     }

//     handleChange(event){
//         this.setState({value: event.target.value.toUpperCase()});
//     }

//     handleSubmit(event){
//         alert('A name was submitted:' + this.state.value);
//         event.preventDefault();
//     }

//     render(){
//         return(
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Name:
//                     <input type="text" value={this.state.value} onChange={this.handleChange} />
//                 </label>
//                 <input type="submit" value="Submit" />
//             </form>
//         );
//     }
// }
// ReactDOM.render(<NameForm />, document.getElementById('root'));


//textarea标签
// class EssayForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             value: '请撰写一篇关于你喜欢的 DOM 元素的文章.'
//          };

//          this.handleChange = this.handleChange.bind(this);
//          this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event){
//         this.setState({value: event.target.value});
//     }

//     handleSubmit(event){
//         alert('提交的文章:' +this.state.value);
//         event.preventDefault();
//     }

//     render() { 
//         return ( 
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     文章：
//                     <input type="submit" value="提交" />
//                     <br />
//                     <textarea value={this.state.value} onChange={this.handleChange} />
//                 </label>
               

//             </form>

//          );
//     }
// }

//ReactDOM.render(<EssayForm />, document.getElementById('root'));


//select标签
class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'coconut' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        alert('你喜欢的风味是：' +this.state.value);
    }

    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                <label>
                    选择你喜欢的风味:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">葡萄柚</option>
                        <option value="lime">酸橙</option>
                        <option value='coconut'>椰子</option>
                        <option value="mango">芒果</option>
                    </select>
                </label>
                <input type="submit" value="提交" />
            </form>
         );
    }
}
 
ReactDOM.render(<FlavorForm />, document.getElementById('root'));
 