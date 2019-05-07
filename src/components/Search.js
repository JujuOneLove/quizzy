import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class Search extends Component {
    render() {
        let search = this.props.quizzes.map(quiz => <li key={quiz._id}><Link to={"/jouer/"+quiz._id}>{quiz.name}</Link></li>);
            return (
            <div className="filter container">
                <ul>
                    {search}
                </ul>
            </div>
        );
    }
}
