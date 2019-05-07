import React, {Component} from 'react';
import {Link} from "react-router-dom";
import logo from "../assets/svg/logo.svg"

export default class Navbar extends Component {
    render() {
        return (
            <nav className="nav">
                <div className="container">
                    <Link to="/"><img className="logo" src={logo} alt="Quizzy - Site Officiel des Quiz"/></Link>
                    <ul>
                        <li>
                            <Link to="/persons">Personnes</Link>
                        </li>
                        <li>
                            <Link to="/quotes">Quotations</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}


