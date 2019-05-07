import React, {Component} from 'react';
import Personne from "./Personne";

export default class Search extends Component {
    render() {
        let search = this.props.quizzes.map(quiz => <li>{quiz.name}</li>);
            return (
            <div className="filter">
                <ul>
                    {search}
                </ul>
            </div>
        );
    }
}


