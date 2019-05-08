import React, {Component} from 'react';

class CurrentScore extends Component {
    render(){
        return(
            <div className="score">
                <span>Score: {this.props.score}</span>
            </div>
        )
    }
}

export default CurrentScore;
