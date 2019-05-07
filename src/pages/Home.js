import React, {Component} from 'react';
import axios from "axios";
import Login from "./Login";

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
        if (!Login.getUser()) {
            return (<p>Access forbidden</p>);
        }else
        return (
            <div className="App">
               <h1>Je suis la Home</h1>
            </div>
        );
    }
}


