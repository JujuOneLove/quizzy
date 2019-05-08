import React, { Component } from 'react';
import axios from 'axios';

class CreerQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'demo',
            logo: '',
            keywords: '',
            createdBy: {},
            questions: [{ question: "quest1", point: 1, answers: [{ valid: true, answerText: "Vrai" }, { valid: false, answerText: "Faux" }] }],
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
            questions: this.state.questions.concat([{ question: "", point: 1, answers: [{ valid: false, answerText: "Vrai" }, { valid: false, answerText: "Faux" }] }])
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
        return (
            <form encType="multipart/form-data" onSubmit={this.handleSubmit}>
                <label>
                    Name
                    <input
                        name="name"
                        type="test"
                        value={this.state.name}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    logo:
                    <input id="picture1" type="file" name="file1" />
                </label>
                <br />
                <label>
                    keyword:
                    <select name="keyword" value={this.state.value} onChange={this.handleOnChangeKeywords} multiple>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
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
                            <input
                                type="radio"
                                value={question.answers[0].answerText}
                                onChange={this.handleOnAnswersCheckboxChange(idx)}
                                key={`question-${idx}-true`}
                                checked={question.answers[0].valid}
                            /> {question.answers[0].answerText}

                            <input
                                type="radio"
                                value={question.answers[1].answerText}
                                onChange={this.handleOnAnswersCheckboxChange(idx)}
                                key={`question-${idx}-false`}
                                checked={question.answers[1].valid}
                            /> {question.answers[1].answerText}
                        </label>
                        <br />
                        <button
                            type="button"
                            onClick={this.handleRemoveQuestion(idx)}
                        >
                            SUPPRIMER
                        </button>
                        <hr />
                    </div>
                ))}
                <button
                    type="button"
                    onClick={this.handleAddQuestion}
                >
                    Add Question
                </button>

                <button type="submit">Créer</button>
            </form>

        );
    }
}

export default CreerQuiz;
