import React, {Component} from 'react';

export default class AnswerTextQuestion extends Component {
    render() {
        return (
            <span className="btn">
                <input type="radio" value={this.props.value} onChange={this.props.handleOnAnswersCheckboxChange(this.props.id)} key={`question-${this.props.id}-true`} checked={this.props.checked}/> <span>{this.props.value}</span>
            </span>
        );
    }
}
