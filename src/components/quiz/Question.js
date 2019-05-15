import React, {Component} from 'react';

class Question extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        this.props.onChoiceChange(e.target.value);
    }

    render() {
        const question = this.props.question;
        return (
            <div>
                <h3>{question.question}</h3>
                <ul className="flex wrap">
                    {question.image === true && question.answers.map((choice) => {
                        return (
                            <div className="image" key={Math.floor(Math.random() * Math.floor(1337))}>
                                    <input type="radio" onChange={this.handleChange} name={choice.answerText}
                                           value={choice.valid}/><img src={choice.image} alt="reponse"/>
                                </div>)
                    })
                    }
                    {question.image === false && question.answers.map((choice) => {
                        return (
                            <span className="btn" key={Math.floor(Math.random() * Math.floor(1337))}>
                                <input type="radio" onChange={this.handleChange} name={choice.answerText}
                                       value={choice.valid}/> {choice.answerText}
                            </span>
                        )
                    })
                    }
                </ul>
            </div>
        );
    }
}

export default Question;
