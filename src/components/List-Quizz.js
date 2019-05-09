import React, {Component} from 'react';
import Quizz from "./Quizz";

export default class ListQuizz extends Component {
    render() {
        if (!this.props.quizzes) {
            return null;
        } else return (
            <div className="flex wrap">
                {this.props.quizzes.map((quiz,index) => <Quizz key={quiz._id} id={quiz._id} name={quiz.name} image={quiz.logo}/>)}
            </div>
        );
    }
}
