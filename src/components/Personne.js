import React from 'react';

class Personne extends React.Component {
    render() {
        const styleArticle = { background: this.props.couleur};
        return (
            <article>
                <header style={styleArticle}>
                    <button className="remove" onClick={() => this.props.removePersonne(this.props.id)}>X</button>
                    <img src={this.props.avatar} alt="People"/>
                </header>
                <main>
                    <h3>{this.props.name} {this.props.surname}</h3>
                </main>
                <footer>
                    <span>score:{this.props.score}</span>
                </footer>
            </article>
        );
    }
}

export default Personne;