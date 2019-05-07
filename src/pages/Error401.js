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
                    <h1>401</h1>
                    <p>Accès Refusé... C'est un problème?</p>
                    <Link className="btn" to="/">Retourner à la page d'accueil</Link>
                </div>
            </div>
        );
    }
}
