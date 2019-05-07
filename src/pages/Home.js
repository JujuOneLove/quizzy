import React, {Component} from 'react';
import axios from "axios";
import ListQuizz from "../components/List-Quizz";
import Login from "./Login";
import Error from "./Error401";

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
        if (!this.state.quizzes) {
            return (<p>loading data....</p>)
        }
        if (!Login.getUser()) {
            return (
                <Error/>
            );
        }else
        return (
            <div className="App">
                <h1>Tout nos quiz sont ici !</h1>
                <ListQuizz quizzes={this.state.quizzes}/>
            </div>
        );
    }
}


