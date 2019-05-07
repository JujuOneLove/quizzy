import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class Quotation extends Component {
    render() {
        return (
            <Link to={"/jouer/" + this.props.id} className="quiz-link">
                <article className="quiz">
                    <header>
                        <img src={this.props.image} alt={this.props.name}/>
                    </header>
                    <main>
                        <h3>{this.props.name}</h3>
                    </main>
                </article>
            </Link>
        );
    }
}
