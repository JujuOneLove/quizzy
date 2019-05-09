import React, { Component } from 'react';
import axios from 'axios';
import Error from "./Error401";
import Login from "./Login";
import Buble from "../components/Buble";

class CreerQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            logo: '',
            keywords: '',
            createdBy: Login.getUser().username!==null ? Login.getUser().username : "",
            questions: [{ question: "", point: 1, answers: [{ valid: true, answerText: "Vrai","image": false }, { valid: false, answerText: "Faux","image": false }] }],
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
            questions: this.state.questions.concat([{ question: "", point: 1, answers: [{ valid: false, answerText: "Vrai","image": false }, { valid: false, answerText: "Faux","image": false }] }])
        });
    };

    handleOnChangeKeywords = e => {
        var options = e.target.options;
        var value = [];
        for (var i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        this.setState({ keywords: value })
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
            return { ...question, [name]: value };
        });

        this.setState({ questions: newQuestion });

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
            return { ...question, answers: answersQ };
        });

        this.setState({ questions: newQuestions });

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

        axios.post('http://localhost:8081/quizzes/new', fd).then(
            res => console.log('then', res));

        console.log('state', this.state)

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
                <label>
                    Nom
                    <input
                        name="name"
                        type="test"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                    required/>
                </label>
                <br />
                <label>
                    Logo:
                    <input id="picture1" type="file" name="file1" required/>
                </label>
                <br />
                <label>
                    Mots clés:
                    <select name="keyword" value={this.state.value} onChange={this.handleOnChangeKeywords} multiple>
                        <option value="top">Top</option>
                        <option value="sport">Sport</option>
                        <option value="fun">Fun</option>
                        <option value="dance">Dance</option>
                        <option value="jeux">Jeux</option>
                        <option value="football">Football</option>
                    </select>
                </label>
                <br />

                {this.state.questions.map((question, idx) => (
                    <div key={`div-${idx}`}>
                        <label>
                            Question
                            <input
                                key={`question-${idx}`}
                                type="text"
                                placeholder={`question`}
                                name="question"
                                value={question.question}
                                onChange={this.handleOnChangeQuestion(idx)}
                                required
                            />
                        </label>
                        <label>
                            NB de point
                            <input
                                key={`point-${idx}`}
                                type="number"
                                placeholder={`point`}
                                name="point"
                                value={question.point}
                                onChange={this.handleOnChangeQuestion(idx)}

                            />
                        </label>

                        <label>
                            Réponse:
                            <div className="flex wrap">
                                <span className="btn">
                                    <input
                                        type="radio"
                                        value={question.answers[0].answerText}
                                        onChange={this.handleOnAnswersCheckboxChange(idx)}
                                        key={`question-${idx}-true`}
                                        checked={question.answers[0].valid}
                                    /> <span>{question.answers[0].answerText}</span>
                                </span>
                                <span className="btn">
                                    <input
                                        type="radio"
                                        value={question.answers[1].answerText}
                                        onChange={this.handleOnAnswersCheckboxChange(idx)}
                                        key={`question-${idx}-false`}
                                        checked={question.answers[1].valid}
                                    /> <span>{question.answers[1].answerText}</span>
                                </span>
                            </div>
                        </label>
                        <div className="flex wrap">

                        <button
                            type="button"
                            onClick={this.handleRemoveQuestion(idx)}
                        >
                            Supprimmer
                        </button>
                        </div>
                        <hr />
                    </div>
                ))}
                <div className="flex wrap">
                    <button
                        type="button"
                        onClick={this.handleAddQuestion}
                    >
                        Ajouter une question
                    </button>

                    <button type="submit">Créer</button>
                </div>
            </form>
            </div>
        );
    }
}

export default CreerQuiz;
