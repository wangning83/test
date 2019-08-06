import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


//阻止组件渲染
function WarningBanner(props){
    if(!props.warn){
        return null;
    }

    return(
        <div className="warning" style={{backgroundColor:'red'}}>
            Warning!
        </div>
    );
}

class Page extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleClick = this.handleToggleClick.bind(this);
        this.state = {showWarning: true}
    }

    handleToggleClick(){
        this.setState(prevState => ({
            showWarning: !prevState.showWarning
        }));
    }

    render(){
        return(
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning? 'Hide' : 'Show'}
                </button>
            </div>
        );
    }
}

ReactDOM.render(<Page />, document.getElementById('root'));

