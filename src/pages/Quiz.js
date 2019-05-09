import React, {Component} from 'react';
import axios from 'axios'

import {Question, Results, CurrentScore, CurrentQuestion} from "../components/quiz";
import Buble from "../components/Buble";
import Login from "./Login";

class Quiz extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quiz: {},
            currentQuestion: 1,
            currentScore: 0
        };

        this.handleChange = this.handleChange.bind(this);
    }

    async componentDidMount() {
        this.getQuiz(this.props.match.params.quiz);

    }

    async getQuiz(id) {
        await axios.get(`http://localhost:8081/quizzes/${id}`)
            .then(response => {
                this.setState({quiz: response.data});
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    async saveScore(){
        let user=Login.getUser();
        if (user!==null)
            await axios.post('http://localhost:8081/savescore',{user: user, score:this.state.currentScore,quiz:this.state.quiz})
    }

    handleChange(choice) {
        let currPoints = this.state.quiz.questionsAndAnswers[this.state.currentQuestion - 1].point;
        this.setState((prevState, props) => {
            return {
                currentQuestion: prevState.currentQuestion + 1,
                currentScore: JSON.parse(choice) ? prevState.currentScore + currPoints : prevState.currentScore
            };
        });
    }

    render() {
        //bloc info du quizz
        const renderQuiz = () => {
            //on vérifie qu'il y a quelque chose dans l'object quiz, cad le quiz
            if (Object.keys(this.state.quiz).length > 0) {
                const questions = this.state.quiz.questionsAndAnswers;
                return (
                    <article className="quiz single">
                        <h1>{this.state.quiz.name}</h1>
                        {this.state.currentQuestion <= questions.length &&
                        <CurrentQuestion total={questions.length} current={this.state.currentQuestion}/>
                        }
                        <div className="flex">
                            <img src={this.state.quiz.logo} alt={this.state.quiz.name}/>
                            <div>
                                {this.state.currentQuestion > questions.length &&
                                <Results total={questions.length} score={this.state.currentScore} saveScore={()=>this.saveScore()}/>
                                }

                                {this.state.currentQuestion <= questions.length &&
                                <Question question={questions[this.state.currentQuestion - 1]}
                                          onChoiceChange={this.handleChange}/>
                                }
                            </div>
                        </div>
                        {this.state.currentQuestion <= questions.length &&
                        <CurrentScore total={questions.length}
                                      score={this.state.currentScore}/>
                        }
                        <div className="person">crée par {this.state.quiz.createdBy.user ? this.state.quiz.createdBy.user : "un anonyme"}</div>
                    </article>);
            }
        };
        return (
            <section className="container">
                <Buble/>
                <div className="content quiz">
                    {renderQuiz()}
                </div>
            </section>
        )
    }
}

export default Quiz;
