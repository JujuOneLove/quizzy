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
        return (
            <div className="container">
                <h1>Tout nos quiz sont ici !</h1>
                <ListQuizz quizzes={this.state.quizzes}/>
            </div>
        );
    }
}


