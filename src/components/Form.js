import React, {Component} from 'react';

export default class Form extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <label htmlFor="newMessage">new quote</label>
                <textarea id="newMessage" placeholder="enter your message"
                          onChange={this.props.handleNewQuote}/>
                <br/>
                <label htmlFor="newAuthor">author</label>
                <input id="newAuthor" placeholder="author name"
                       onChange={this.props.handleNewQuote}/>
                <input type="submit" value="OK"/>
            </form>
        )
    }
}
