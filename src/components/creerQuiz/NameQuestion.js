import React, {Component} from 'react';

class NameQuestion extends Component {
    render() {
        return (
            <label>
                Question
                <input
                    key={`question-${this.props.id}`}
                    type="text"
                    placeholder={`question`}
                    name="question"
                    value={this.props.question}
                    onChange={this.props.handleOnChangeQuestion(this.props.id)}
                    required
                />
            </label>
        );
    }
}

export default NameQuestion;
