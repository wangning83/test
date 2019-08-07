import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//包含关系
// function FancyBorder(props){
//     return(
//         <div className={'FancyBorder FancyBorder-' + props.color}>
//             {props.children}
//         </div>
//     );
// }

// function WelcomeDialog(){
//     return(
//         <FancyBorder color="blue">
//             <h1 className="Dialog-titls">
//                 Welcome
//             </h1>
//             <p className="Dialog-message">
//                 Thank you for visiting our spaceraft!
//             </p>
//         </FancyBorder>
//     );
// }

// ReactDOM.render(<WelcomeDialog />, document.getElementById('root'));

//少数情况下，你可能需要在一个组件中预留出几个“洞”。
//这种情况下，我们可以不使用 children，而是自行约定：
//将所需内容传入 props，并使用相应的 prop。
// function Contacts(){
//     return(
//     <div className="Contacts" style={{backgroundColor:"yellow"}} />
//     );
// }
// function Chat(){
//     return (
//     <div className="Chat" style={{backgroundColor:"pink"}} />
//     );
// }

// function SplitPane(props){
//     return(
//         <div className="SplitPane">
//             <div className="SplitPane-left">
//                 {props.left}
//             </div>
//             <div className="SpliPane-right">
//                 {props.right}
//             </div>
//         </div>
//     );
// }

// function App(){
//     return(
//         <SplitPane left={<Contacts />} right={<Chat />} />
//     );
// }

// ReactDOM.render(<App />, document.getElementById('root'));



//特例关系
//会把一些组件看作是其他组件的特殊实例
//比如 WelcomeDialog 可以说是 Dialog 的特殊实例
// function FancyBorder(props){
//          return(
//              <div className={'FancyBorder FancyBorder-' + props.color}>
//                  {props.children}
//              </div>
//          );
//      }

// function Dialog(props){
//     return(
//         <FancyBorder color="blue">
//             <h1 calssName="Dialog-title">
//                 {props.title}
//             </h1>
//             <p className="Dialog-message">
//                 {props.message}
//             </p>
//         </FancyBorder>

//     );
// }

// function WelcomeDialog(){
//     return(
//         <Dialog 
//             title="Welcome"
//             message="Thank you for visiting our spacecraft!" />
//     );
// }
// ReactDOM.render(<WelcomeDialog />, document.getElementById('root'));


function FancyBorder(props){
    return(
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

function Dialog(props){
    return(
        <FancyBorder color="blue">
            <h1 claccName="Dialog-title">{props.title}</h1>
            <p className="Dialog-message">{props.message}</p>
            {props.children}
        </FancyBorder>
    );
}

class SignUpDialog extends React.Component{
    constructor(props){
        super(props);
        this.state={login: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
    }


    render(){
        return(
            <Dialog title="Mars Exploration Program"
                    message="How should we refer to you?">
                        <input value={this.state.login}
                            onChange={this.handleChange} />
                        <button onClick={this.handleSignUp} >
                            Sing Me Up!
                        </button>
            </Dialog>
        );
    }
    handleChange(e){
        this.setState({login: e.target.value});
    }

    handleSignUp(){
        alert("Welcome aboard, " + this.state.login);
    }
} 

ReactDOM.render(
    <SignUpDialog />,
    document.getElementById('root')
);