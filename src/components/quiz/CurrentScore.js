import React, {Component} from 'react';

class CurrentScore extends Component {
    render(){
        return(
            <div >
                Question {this.props.current} / {this.props.total}
                <span className="pull-right"><strong>Score: {this.props.score}</strong></span>
            </div>
        )
    }
}

export default CurrentScore;
