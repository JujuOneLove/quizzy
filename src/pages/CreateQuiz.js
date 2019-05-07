import React, {Component} from 'react';
import axios from "axios";

export default class CreateQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quiz: {
                name:"",
                logo: null,
                createdBy: {},
                keywords: [],
                questionsAndAnswers: []
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeFile = this.handleChangeFile.bind(this);
    }

    handleChange(event) {
        this.setState({quiz: {name: event.target.value}});
    }

    handleChangeFile(event){
        this.setState({quiz: {logo: '/resources/pictures/' + event.target.files[0].name}});
    }



    async handleSubmit(e) {
        e.preventDefault();
        const fd = new FormData();
        fd.append('picture', e.target.picture1.files[0], e.target.picture1.files[0].name);
        await axios.post(8081 + 'upload', fd).then(
            res => console.log(res));
        await axios.post('http://localhost:8081/quizzes',this.state.quiz);
    }


    render() {
        return (
            <form encType="multipart/form-data" onSubmit={e => this.handleSubmit(e)}>
                <label>
                    Name:
                    <input type="text" value={this.state.quiz.name} onChange={e=>this.handleChange(e)} />
                    <fieldset>
                        <label htmlFor="picture1">picture:</label>
                        <input id="picture1" type="file" name="file1"/>
                    </fieldset>
                    <button type="submit">OK</button>
                </label>
            </form>
        );
    }
}
