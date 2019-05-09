import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Buble from "../components/Buble";

export default class Error extends Component {
    render() {
        return (
            <div className="error404 container">
                <Buble/>
                <div className="content">
                    <h1>404</h1>
                    <p>On dirait que tu es perdu ... C'est un problème?</p>
                    <Link className="btn" to="/">Retourner à la page d'accueil</Link>
                </div>
            </div>
        );
    }
}
