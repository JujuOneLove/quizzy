import React, {Component} from 'react';

class CreerQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            logo: '',
            keyword: '',
            questions: [{question: "", point: 1, answers: [{valid: false, answerText: "Vrai"},{valid: false, answerText: "Faux"}]}],
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
            questions: this.state.questions.concat([{question: ""}])
        });
    };

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

    handleSubmit = evt => {
        evt.preventDefault();
        const { name, questions } = this.state;
        alert(`Incorporated: ${name} with ${questions.length} shareholders`);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name
                    <input
                        name="name"
                        type="test"
                        value={this.state.name}

                        onChange={this.handleInputChange}/>
                </label>
                <br/>
                <label>
                    logo:
                    <input
                        name="logo"
                        type="file"
                    />
                </label>
                <br/>
                <label>
                    keyword:
                    <select name="keyword" value={this.state.value} onChange={this.handleInputChange} multiple>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <br/>

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
                            <input type="radio" value="Vrai" name={`answers-${idx}`} key={`question-${idx}-true`}/> {question.answers[0]}
                            <input type="radio" value="Faux" name={`answers-${idx}`} key={`question-${idx}-false`} /> {question.answers[1]}
                        </label>

                        <button
                            type="button"
                            onClick={this.handleRemoveQuestion(idx)}
                        >
                            SUPPRIMER
                        </button>
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
