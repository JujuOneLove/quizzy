import React, {Component} from 'react';

export default class AnswerTextQuestion extends Component {
    render() {
        return (
            <label>
                {this.props.value}:
                <input id="picture" type="file" name="picture" className={this.props.value} onChange={this.props.handleOnChangeImage(this.props.id)} required/>
            </label>
        );
    }
}
