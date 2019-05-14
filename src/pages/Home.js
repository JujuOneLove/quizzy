import React, {Component} from 'react';
import axios from "axios";
import ListQuizz from "../components/List-Quizz";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quizzes: [],
        };
    }

    async componentDidMount() {
        const quizzes = (await axios.get('http://localhost:8081/quizzes')).data;
        this.setState({
            quizzes
        });
    }
    render() {
        let top = this.state.quizzes.filter(quizz => ((quizz.keywords.indexOf('top')) !== -1) );
        return (
            <div className="container">
                <h2>Top quiz !</h2>
                <ListQuizz quizzes={top}/>
                <h2>Tout nos quiz sont ici !</h2>
                <ListQuizz quizzes={this.state.quizzes}/>
            </div>
        );
    }
}


