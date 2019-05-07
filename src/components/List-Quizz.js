import React, {Component} from 'react';

export default class ListQuizz extends Component {
    render() {
        return (
            <article className="quizz">
                <header>
                    <img src={this.props.image} alt={this.props.name}/>
                </header>
                <main>
                    <h3>{this.props.name}</h3>
                </main>
            </article>
        );
    }
}
