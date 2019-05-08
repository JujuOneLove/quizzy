import React, {Component} from 'react';

class CurrentQuestion extends Component {
    render(){
        return(
            <div className="current">
                <span>{this.props.current} / {this.props.total}</span>
            </div>
        )
    }
}

export default CurrentQuestion;
