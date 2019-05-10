import React, {Component} from 'react';
import axios from 'axios';
import Error from "./Error401";
import Login from "./Login";
import Buble from "../components/Buble";
import {
    Nom,
    Logo,
    Keywords,
    AddQuestion,
    RemoveQuestion,
    NameQuestion,
    ScoreQuestion,
    AnswerTextQuestion
} from "../components/creerQuiz";

class CreerQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            logo: '',
            keywords: null,
            options: [
                {value: 'top', label: 'Top'},
                {value: 'sport', label: 'Sport'},
                {value: 'fun', label: 'Fun'},
                {value: 'dance', label: 'Dance'},
                {value: 'jeux', label: 'Jeux'},
                {value: 'football', label: 'Football'}
            ],
            createdBy: Login.getUser() !== null ? Login.getUser().username : "",
            questions: [{
                question: "",
                point: 1,
                answers: [{valid: true, answerText: "Vrai", "image": false}, {
                    valid: false,
                    answerText: "Faux",
                    "image": false
                }]
            }],
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleAddQuestion = () => {
        this.setState({
            questions: this.state.questions.concat([{
                question: "",
                point: 1,
                answers: [{valid: false, answerText: "Vrai", "image": false}, {
                    valid: false,
                    answerText: "Faux",
                    "image": false
                }]
            }])
        });
    };

    handleOnChangeKeywords = (keywords) => {
        let stringKeyword=[];
        keywords.forEach(function(k) {
            stringKeyword.push(k.value);
        });
        this.setState({keywords:stringKeyword});
    }

    handleRemoveQuestion = idx => () => {
        this.setState({
            questions: this.state.questions.filter((s, sidx) => idx !== sidx)
        });
    };

    handleOnChangeQuestion = idx => evt => {
        const target = evt.target;
        const value = target.value;
        const name = target.name;
        const newQuestion = this.state.questions.map((question, sidx) => {
            if (idx !== sidx) return question;
            return {...question, [name]: value};
        });

        this.setState({questions: newQuestion});

        console.log('ttt', this.state)
    };

    handleOnAnswersCheckboxChange = idx => evt => {
        const target = evt.target;
        const value = target.value;
        const answersQ = this.state.questions[idx].answers;

        //on passe celle qui est vrai a true sinon false
        answersQ.forEach(a => a.answerText === value ? a.valid = true : a.valid = false);

        const newQuestions = this.state.questions.map((question, sidx) => {
            if (idx !== sidx) return question;
            return {...question, answers: answersQ};
        });

        this.setState({questions: newQuestions});

        console.log('handlecheckbox', this.state);
    }

    handleSubmit = evt => {
        evt.preventDefault();
        const fd = new FormData();

        fd.append('picture', evt.target.picture1.files[0], evt.target.picture1.files[0].name);
        fd.append('name', this.state.name);
        fd.append('keywords', JSON.stringify(this.state.keywords));
        fd.append('createdBy', JSON.stringify(this.state.createdBy));
        fd.append('questions', JSON.stringify(this.state.questions));

        axios.post('http://localhost:8081/auth/quizzes/new', fd, {headers: Login.getUser()}).then(
            res => console.log('then', res));

        console.log('state', this.state);
        //this.props.history.push('/');

    };

    render() {
        if (!Login.getUser()) {
            return (
                <Error/>
            );
        } else return (
            <div className="create container">
                <Buble/>
                <form className="block" encType="multipart/form-data" onSubmit={this.handleSubmit}>
                    <Nom name={this.props.name} handleInputChange={this.handleInputChange}/>
                    <br/>
                    <Logo/>
                    <br/>
                    <Keywords options={this.state.options} handleOnChangeKeywords={this.handleOnChangeKeywords}/>
                    <br/>
                    {this.state.questions.map((question, idx) => (
                        <div key={`div-${idx}`}>
                            <NameQuestion id={idx} question={question.question}
                                          handleOnChangeQuestion={this.handleOnChangeQuestion}/>
                            <ScoreQuestion id={idx} point={question.point}
                                           handleOnChangeQuestion={this.handleOnChangeQuestion}/>
                            <label>
                                Réponse:
                                <div className="flex wrap">
                                    <AnswerTextQuestion id={idx} value={question.answers[0].answerText}
                                                        checked={question.answers[0].valid}
                                                        handleOnAnswersCheckboxChange={this.handleOnAnswersCheckboxChange}/>
                                    <AnswerTextQuestion id={idx} value={question.answers[1].answerText}
                                                        checked={question.answers[1].valid}
                                                        handleOnAnswersCheckboxChange={this.handleOnAnswersCheckboxChange}/>
                                </div>
                            </label>
                            <RemoveQuestion id={idx} handleRemoveQuestion={this.handleRemoveQuestion}/>
                            <hr/>
                        </div>
                    ))}
                    <div className="flex wrap">
                        <AddQuestion handleAddQuestion={this.handleAddQuestion}/>
                        <button type="submit">Créer</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreerQuiz;
