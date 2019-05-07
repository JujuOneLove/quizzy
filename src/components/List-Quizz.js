import React, {Component} from 'react';
import Quizz from "./Quizz";

export default class Quotation extends Component {
    render() {
        return (
            <div>
                {this.props.quizzes.map((quiz,index) => <Quizz key={quiz._id} name={quiz.name} image={quiz.logo}/>)}
            </div>
        );
    }
}
