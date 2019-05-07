import React, {Component} from 'react';
import {Link} from "react-router-dom";
import logo from "../assets/svg/logo.svg"
import user from "../assets/svg/user.svg"
export default class Navbar extends Component {
    render() {
        return (
            <nav className="nav">
                <div className="container">
                    <Link to="/"><img className="logo" src={logo} alt="Quizzy - Site Officiel des Quiz"/></Link>
                    <ul>
                        <li>
                            <Link to="/">Personnes</Link>
                        </li>
                        <li>

                        </li>
                        <li>
                            <Link to="/connexion"><img src={user} alt="Connexion"/></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}


