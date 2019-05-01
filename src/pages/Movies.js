import React, {Component} from 'react';
import Movie from '../components/Movie';

export default class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {language: "any", year: 0, actorSearching: ""};
        this.movies = [];
        this.minYear = 2015;
        this.maxYear = 2017;
    }

    componentDidMount() {
        const httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = () => {
            if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200) {
                this.movies = JSON.parse(httpRequest.responseText).movies;
                this.setState({language: "any"});
            }
        };
        httpRequest.open('GET', 'movies.json');
        httpRequest.send();
    }

    render() {
        let movies = this.movies.map(movie => <Movie {...movie}/>)
        return (
            <div className="movies">
                <h1>Filmes Récents</h1>
                <div>
                    <span>Filtre : </span>
                    <div>
                        <span>Language </span>
                        <input type="date" min={this.minYear} max={this.maxYear}/>
                    </div>
                    <div>
                        <span>Année </span>
                        <input type="date" min={this.minYear} max={this.maxYear}/>
                    </div>
                    <div>
                        <span>Auteur </span>
                        <input type="text"/>
                    </div>
                </div>
                {movies}
            </div>
        );
    }
}
