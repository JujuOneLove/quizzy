import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class Error extends Component {
    render() {
        return (
            <div className="error404 container">
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="content">
                    <h1>404</h1>
                    <p>On dirait que tu es perdu ... C'est un problème?</p>
                    <Link className="btn" to="/">Page d'accueil</Link>
                </div>
            </div>
        );
    }
}
