import React, {Component} from 'react';
import axios from 'axios'

import {Question, Results, CurrentScore} from "../components/quiz";

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

    componentDidMount() {
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
                    <div>
                        <h3>le quiz {this.state.quiz.name} crée par {this.state.quiz.createdBy.user}</h3>

                        <h4>mots clé du quiz : {this.state.quiz.keywords.map(word => <p>{word}</p>)}</h4>

                        {this.state.currentQuestion > questions.length &&
                        <Results total={questions.length} score={this.state.currentScore}/>
                        }

                        {this.state.currentQuestion <= questions.length &&
                        <CurrentScore total={questions.length} current={this.state.currentQuestion}
                                      score={this.state.currentScore}/>
                        }

                        {this.state.currentQuestion <= questions.length &&
                        <Question question={questions[this.state.currentQuestion - 1]}
                                  onChoiceChange={this.handleChange}/>
                        }
                    </div>);
            } else {
                return <div>Pas de donnée</div>;
            }
        };
        return (
            <div>
                {renderQuiz()}
            </div>
        )
    }
}

export default Quiz;