import React, {Component} from 'react';

export default class Quotation extends Component {
    render() {
        const styleMessage = {color: 'red'}, styleAuthor = {color: 'green'};
        return (
            <li>
                <span style={styleMessage}> {this.props.message} </span>
                <span style={styleAuthor}> ({this.props.author})</span>
                <button className="remove" onClick={() => this.props.removeQuote(this.props.id)}>X</button>
            </li>
        );
    }
}
