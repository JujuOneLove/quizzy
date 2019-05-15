import React, {Component} from 'react';
import axios from 'axios';
import Error from "./Error401";
import Login from "./Login";
import Buble from "../components/Buble";
import {
    Nom,
    Keywords,
    AddQuestion,
    RemoveQuestion,
    NameQuestion,
    ScoreQuestion,
    AnswerTextQuestion,
    Image
} from "../components/creerQuiz";

class CreerQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            logo: '',
            keywords: [],
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
                image: false,
                answers: [{
                    valid: true,
                    answerText: "Vrai",
                    image: ""
                }, {
                    valid: false,
                    answerText: "Faux",
                    image: ""
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

    handleSelectImage = idx => event => {
        const target = event.target;
        const value = target.value;
        let image;
        if (value === 'image') {
            image = true;
        } else image = false;
        const newQuestion = this.state.questions.map((question, sidx) => {
            if (idx !== sidx) return question;
            else {
                return {
                    question: question.question,
                    point: question.point,
                    image: image,
                    answers: question.answers
                };
            }
        });
        this.setState({
            questions: newQuestion
        });
    }
    handleOnChangeImage = idx => event => {
        const target = event.target;
        let value;
        console.log(target.files[0]);
        if (typeof target.files[0] === 'undefined') {
            value = '';
        } else value = target.files[0].name;
        const className = target.className;
        if (className === "Logo") {
            this.setState({
                logo: '/img/' + value
            });
        } else {
            // eslint-disable-next-line array-callback-return
            const newQuestion = this.state.questions.map((question, sidx) => {
                if (idx !== sidx) return question;
                else {
                    if (className === "Vrai") {
                        return {
                            question: question.question,
                            point: question.point,
                            image: question.image,
                            answers: [{
                                valid: question.answers[0].valid,
                                answerText: question.answers[0].answerText,
                                image: '/img/questions/' + value
                            },
                                {
                                    valid: question.answers[1].valid,
                                    answerText: question.answers[1].answerText,
                                    image: question.answers[1].image
                                }]
                        };
                    } else if (className === "Faux") {
                        return {
                            question: question.question,
                            point: question.point,
                            image: question.image,
                            answers: [{
                                valid: question.answers[0].valid,
                                answerText: question.answers[0].answerText,
                                image: question.answers[0].image
                            },
                                {
                                    valid: question.answers[1].valid,
                                    answerText: question.answers[1].answerText,
                                    image: '/img/questions/' + value
                                }]
                        };
                    }
                }
            });
            console.log(newQuestion);
            this.setState({
                questions: newQuestion
            });
        }

    }
    handleAddQuestion = () => {
        this.setState({
            questions: this.state.questions.concat([{
                question: "",
                point: 1,
                image: false,
                answers: [{
                    valid: true,
                    answerText: "Vrai",
                    image: ""
                }, {
                    valid: false,
                    answerText: "Faux",
                    image: ""
                }]
            }])
        });
    };

    handleOnChangeKeywords = (keywords) => {
        let stringKeyword = [];
        keywords.forEach(function (k) {
            stringKeyword.push(k.value);
        });
        this.setState({keywords: stringKeyword});
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
        let logo = false;
        let inputFiles = evt.target.picture;
        let keys = Object.keys(inputFiles)
        let cpt = 0;
        keys.forEach((key) => {
            if(parseInt(key,10) === cpt){
                fd.append('picture', inputFiles[key].files[0], inputFiles[key].files[0].name);
                logo = logo === false ? true : true;
            }
            cpt++;
        });
        if(logo === false){
            fd.append('picture', inputFiles.files[0], inputFiles.files[0].name);
        }
        fd.append('name', this.state.name);
        fd.append('logo', this.state.logo);
        fd.append('keywords', JSON.stringify(this.state.keywords));
        fd.append('createdBy', this.state.createdBy);
        fd.append('questions', JSON.stringify(this.state.questions));
        axios.post('http://localhost:8081/auth/quizzes/new', fd, {headers: Login.getUser()}).then(/*this.props.history.push('/')*/);
    };

    renderTypeQuestion(question, idx) {
        if (question.image === true) {
            return (
                <div className="flex wrap">
                    <Image id={idx} value={question.answers[0].answerText}
                           handleOnChangeImage={this.handleOnChangeImage}/>
                    <Image id={idx} value={question.answers[1].answerText}
                           handleOnChangeImage={this.handleOnChangeImage}/>
                </div>
            );
        }
    }

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
                    <Image id={"picture"} value={"Logo"} handleOnChangeImage={this.handleOnChangeImage}/>
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
                                <select name="image" onChange={this.handleSelectImage(idx)}>
                                    <option value="text">Text</option>
                                    <option value="image">Image</option>
                                </select>
                                <br/>
                                {this.renderTypeQuestion(question, idx)}
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
