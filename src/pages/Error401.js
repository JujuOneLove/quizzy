import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Buble from "../components/Buble";

export default class Error extends Component {
    render() {
        return (
            <div className="error404 container">
                <Buble/>
                <div className="content">
                    <h1>401</h1>
                    <p>Accès Refusé... C'est un problème?</p>
                    <Link className="btn" to="/admin">Connectez-vous ici</Link>
                </div>
            </div>
        );
    }
}
