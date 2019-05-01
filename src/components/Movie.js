import React, {Component} from 'react';

export default class Movie extends Component {
    render() {
        let auteurs = this.props.actors.map(auteur => <span className="auteur">{auteur}</span> );
        return (
            <article>
                <div>
                    <h3>Titre : {this.props.title}</h3>
                </div>
                <div>
                    <span>Acteurs : {auteurs}</span>
                </div>
                <div>
                    <span>Année : {this.props.year}</span>
                </div>
            </article>
        );
    }
}
