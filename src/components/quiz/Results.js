import React, {Component} from 'react';

class Results extends Component {
    render() {
        const score = this.props.score;
        const total = this.props.total;
        const percent = score / total * 100;
        return (
            <div className="well">
                <h2> {score}/{total} bonnes réponses</h2>
                <hr/>
                <h3>{percent}%</h3>
            </div>
        );

    }
}

export default Results;
