import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//1、
// BoilingVerdict组件接受 celsius 温度作为一个 prop
//并据此打印出该温度是否足以将水煮沸的结果
// function BoilingVerdict(props){
//     if(props.celsius >= 100){
//         return <p>The warter would boil.</p>
//     }
//     return <p>The warter would not boil.</p>
// }

//2、
//创建一个名为 Calculator 的组件
//它渲染一个用于输入温度的 <input>
//并将其值保存在 this.state.temperature 中
//另外, 它根据当前输入值渲染 BoilingVerdict 组件
// class Calculator extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             temperature: '109'

//          };
//          this.handleChange = this.handleChange.bind(this);
//     }

//     handleChange(e){
//         this.setState({temperature: e.target.value});
//         e.preventDefault();
//     }

//     render() { 
//         const temperature = this.state.temperature;
//         return ( 
//             <fieldset>
//                 <legend>Enter temperature in celsius:</legend>
//                 <input
//                    value={temperature}
//                    onChange={this.handleChange} />

//                 <BoilingVerdict
//                       celsius={parseFloat(temperature)} />   
//             </fieldset>
//          );
//     }
// }

// ReactDOM.render(<Calculator />, document.getElementById('root'));



//3、
//新需求是，在已有摄氏温度输入框的基础上，我们提供华氏度的输入框，并保持两个输入框的数据同步。
//先从 Calculator 组件中抽离出 TemperatureInput 组件
//然后为其添加一个新的 scale prop，它可以是 "c" 或是 "f"
const scaleNames ={
    c: 'Celsius',
    f: 'Fahrenheit'
};

//转换函数
function toCelsius(fahrenheit){
    return (fahrenheit - 32) * 5 /9;
}
function toFahrenheit(celsius){
    return (celsius * 9 / 5 ) + 32;
}

//编写另一个函数，它接受字符串类型的 temperature 和转换函数作为参数并返回一个字符串。
//依据一个输入框的值计算出另一个输入框的值
function tryConvert(temperature, convert){
    const input = parseFloat(temperature);
    if(Number.isNaN(input)){
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function BoilingVerdict(props){
        if(props.celsius >= 100){
           return <p>The warter would boil.</p>
         }
        return <p>The warter would not boil.</p>
     }

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        //this.state = { temperature: '' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        //this.setState({temperature: e.target.value});
        this.props.onTemperatureChange(e.target.value);
        //e.preventDefault();
    }

    render() { 
        //const temperature =this.state.temperature;
        const temperature =this.props.temperature;
        const scale = this.props.scale;
        return ( 
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature} onChange={this.handleChange} />
            </fieldset>

         );
    }
}
 
//4、
//修改 Calculator 组件让它渲染两个独立的温度输入框组件
class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state={temperature:'', scale: 'c'};

        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }

    handleCelsiusChange(temperature){
        this.setState({scale: 'c', temperature});
    }
    handleFahrenheitChange(temperature){
        this.setState({scale: 'f', temperature});
    }


    render(){
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale ==='c' ? tryConvert(temperature, toFahrenheit) : temperature;
        
        return(
            <div>
                <TemperatureInput 
                scale="c"
                temperature={celsius}
                onTemperatureChange={this.handleCelsiusChange}  />
                <TemperatureInput 
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={this.handleFahrenheitChange}  />
                <BoilingVerdict  celsius={parseFloat(celsius)} />
            </div>
        );
    }
}
ReactDOM.render(<Calculator />, document.getElementById('root'));

//5、
//接下来，我们将 TemperatureInput 组件中的 state 移动至 Calculator 组件中去。
//如果 Calculator 组件拥有了共享的 state
//它将成为两个温度输入框中当前温度的“数据源”
//它能够使得两个温度输入框的数值彼此保持一致
//由于两个 TemperatureInput 组件的 props 均来自共同的父组件 Calculator
//因此两个输入框中的内容将始终保持一致。