import React, {Component} from 'react';

class Results extends Component {
    render() {
        const score = this.props.score;
        const total = this.props.total;
        const percent = score / total * 100;
        return (
            <div className="well">
                <h4> tu as {score} bonnes réponses sur {total} questions</h4>
                <hr/>
                <h1>{percent}%</h1>
            </div>
        );

    }
}

export default Results;