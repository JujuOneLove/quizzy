import React, {Component} from 'react';

class ScoreQuestion extends Component {
    render() {
        return (
            <label>
                Nombre de point
                <input
                    key={`point-${this.props.id}`}
                    type="number"
                    placeholder={`point`}
                    name="point"
                    value={this.props.point}
                    onChange={this.props.handleOnChangeQuestion(this.props.id)}

                />
            </label>
        );
    }
}

export default ScoreQuestion;
